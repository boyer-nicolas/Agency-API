module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQL_HOST', 'mariadb'),
      port: env.int('MYSQL_PORT', 3306),
      database: env('MYSQL_DATABASE', 'agency'),
      user: env('MYSQL_USER', 'agency'),
      password: env('MYSQL_PASSWORD', 'strapi'),
      ssl: false,
    },
    debug: false,
  },
})
