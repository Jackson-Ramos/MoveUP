import createApp from "./app";

const app = createApp();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`🟢 Server running at port http://localhost:${PORT}`);
});