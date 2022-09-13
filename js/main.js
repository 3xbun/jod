const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const page = ref("login");
    const post = ref("");

    const noti = ref([
      "เช้านี้ก็สู้ ๆ นะ ยังมีเราตรงนี้เสมอ อย่าไปสายล่ะ เดี๋ยวพี่นุชบ่น!! May the force be with you.",
      "เมื่อวานคือทำดีมาก ขอให้วันนี้ทำดีกว่าเมื่อวานเลยนะ ฮึบ ๆ",
      "อย่าไปคิดมากเลยที่บอสพูด ไปหาของหวานกินดีกว่า วันก่อนบ่นอยากกินนมสดปั่นนี่",
    ]);

    const posts = [
      {
        text: "อยากกินชาไข่มุกจุงเบย...",
        time: "4h Ago",
      },
      {
        text: "ในที่สุดก็ได้กินแล้ว",
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80",
        time: "Now",
      },
    ];

    const postFn = () => {
      posts.push({
        text: post.value,
        time: "Now",
      });

      post.value = "";
    };

    return {
      page,
      post,
      posts,
      noti,
      postFn,
    };
  },
}).mount("#app");
