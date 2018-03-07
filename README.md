# Swagger Maven Plugin with JS support

This is a fork from an official [Swagger Maven Plugin](https://github.com/kongchen/swagger-maven-plugin/) with addition of generating JavaScript files which can then easily be included in any custom HTML template, which is suitable for automatic builds of the projects. For all information regarding usage of the plugin and documentation, please visit the GitHub page of the official plugin.

# Features

In addition to the official plugin, it also supports generation of JavaScript file.


# Configuration for `apiSource`

In addition to the all parameters of the official plugin, it also supports the following:

| **name** | **description** |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `outputFormats` | The format types of the generated swagger spec. Valid values are `json`, `yaml`, `js` or all `json,yaml,js`. The `json` format is default.|

# Installation

This plugin is not available on Maven Central, so to install it locally, do the following:
 * Clone/Download the repository
 * Make sure you have [Maven installed](https://maven.apache.org/install.html)
 * In terminal, navigate to cloned/downloaded directory and execute `mvn clean -DskipTests install` or if you  want to  execute tests (not necessary for installation), execute  `mvn clean -DargLine="--add-modules java.xml.bind" install`
 