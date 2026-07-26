// api/chat.js
module.exports = async (req, res) => {
    // 1. 设置 CORS 跨域头，让您的 App 可以调用
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 2. 处理浏览器发出的预检请求 (Preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. 仅允许 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 4. 获取用户发来的消息
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Missing message' });
    }

    // --- 在这里调用你的大模型 API (如 DeepSeek) ---
    // 这是示例的回显逻辑，部署成功后可以先测试
    const reply = `你说的是：${message}`;

    // 5. 返回回复
    res.status(200).json({ reply });
};
