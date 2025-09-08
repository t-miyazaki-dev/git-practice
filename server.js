import Fastify from "fastify";

const fastify = Fastify({
    logger:true
})

fastify.get(`/health_check`,async(request,reply) => {
    return `OK`;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('サーバーがポート 3000 で起動しました。');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();