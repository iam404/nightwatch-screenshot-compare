module.exports = function(grunt) {
  grunt.initConfig({
    nightwatch: {
      options: {
        "src_folders" : "mytest.js",
        "output_folder" : "reports",
        "custom_commands_path" : "./commands",
        "custom_assertions_path" : "./assertions",
        "globals_path" : "",

        "selenium" : {
          "start_process" : true,
          "server_path" : "/node_modules/selenium-server/lib/runner/selenium-server-standalone-2.45.0.jar",
          "log_path" : "",
          "host" : "127.0.0.1",
          "port" : 4444
        },

        "test_settings" : {
          "default" : {
            "launch_url" : "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "firefox_profile": false,
            "chrome_driver": "",
            "ie_driver": "",
            "screenshots" : {
              "enabled" : true,
              "path" : ""
            },
            "desiredCapabilities": {
              "browserName": "firefox",
              "javascriptEnabled": true,
              "acceptSslCerts": true
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nightwatch');
 

  grunt.registerTask('default');
};
