module.exports = {
  apps: [
    {
      name: 'supervise-server',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: false,
    },
  ],
};
