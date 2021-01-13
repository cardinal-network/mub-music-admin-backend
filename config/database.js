module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '162.241.203.136'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'cardin65_mubdmn-dev'),
        username: env('DATABASE_USERNAME', 'cardin65_mubdmn_dev_admin'),
        password: env('DATABASE_PASSWORD', '45K&amuvwZoSbIj$/z:;"3]t0_8!a6DL=2(;6CTv'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
