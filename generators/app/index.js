'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-hy-mean') + ' generator! By Hei Yuki!'
    ));
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your Project Name',
      default: this.appname // Default to current folder name
    },{
      type: 'input',
      name: 'auth',
      message: 'Your Authors Name',
      default: "Kitty Kat" // Default to current folder name
    }];


    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath(''),
      this.destinationPath('./' + this.props.name), {
        appname: this.props.name,
        appauth: this.props.auth
      }
    );
    this.fs.copyTpl(
      this.templatePath('./.bowerrc'),
      this.destinationPath('./' + this.props.name + '/.bowerrc'), {
        appname: this.props.name,
        appauth: this.props.auth
      }
    );
    this.fs.copyTpl(
      this.templatePath('./.gitignore'),
      this.destinationPath('./' + this.props.name + '/.gitignore'), {
        appname: this.props.name,
        appauth: this.props.auth
      }
    );
  },

  install: function() {
    this.installDependencies();
  }
});
