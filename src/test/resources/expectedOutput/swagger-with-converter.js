var swaggerSpec = {
  "swagger" : "2.0",
  "info" : {
    "description" : "This is a sample.",
    "version" : "v1",
    "title" : "Swagger Maven Plugin Sample",
    "termsOfService" : "http://www.github.com/kongchen/swagger-maven-plugin",
    "contact" : {
      "name" : "Kong Chen",
      "url" : "http://kongch.com",
      "email" : "kongchen@gmail.com"
    },
    "license" : {
      "name" : "Apache 2.0",
      "url" : "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host" : "www.example.com:8080",
  "basePath" : "/api",
  "tags" : [ {
    "name" : "pet",
    "description" : "Operations about pets"
  }, {
    "name" : "store"
  }, {
    "name" : "user",
    "description" : "Operations about user"
  } ],
  "schemes" : [ "http", "https" ],
  "paths" : {
    "/" : {
      "get" : {
        "summary" : "testingRootPathResource",
        "description" : "",
        "operationId" : "testingRootPathResource",
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "/myResourceImpl" : {
      "get" : {
        "summary" : "Find pet(s) by ID",
        "description" : "This is a contrived example",
        "operationId" : "getPetsById",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "startId",
          "in" : "query",
          "description" : "start ID of pets that need to be fetched",
          "required" : true,
          "type" : "integer",
          "maximum" : 99,
          "minimum" : 1,
          "format" : "int64"
        }, {
          "name" : "endId",
          "in" : "query",
          "description" : "end ID of pets that need to be fetched",
          "required" : true,
          "type" : "integer",
          "maximum" : 99,
          "minimum" : 1,
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Pet not found"
          }
        }
      }
    },
    "/pet" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Returns pet",
        "description" : "",
        "operationId" : "get",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      },
      "post" : {
        "tags" : [ "pet" ],
        "summary" : "Add a new pet to the store",
        "description" : "",
        "operationId" : "addPet",
        "consumes" : [ "application/json", "application/xml" ],
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Pet object that needs to be added to the store",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Pet"
          }
        } ],
        "responses" : {
          "405" : {
            "description" : "Invalid input"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      },
      "put" : {
        "tags" : [ "pet" ],
        "summary" : "Update an existing pet",
        "description" : "",
        "operationId" : "updatePet",
        "consumes" : [ "application/json", "application/xml" ],
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Pet object that needs to be added to the store",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Pet"
          }
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Pet not found"
          },
          "405" : {
            "description" : "Validation exception"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/findByStatus" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Finds Pets by status",
        "description" : "Multiple status values can be provided with comma seperated strings",
        "operationId" : "findPetsByStatus",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "status",
          "in" : "query",
          "description" : "Status values that need to be considered for filter",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "available",
            "enum" : [ "available", "pending", "sold" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Pet"
              }
            }
          },
          "400" : {
            "description" : "Invalid status value"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/findByTags" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Finds Pets by tags",
        "description" : "Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.",
        "operationId" : "findPetsByTags",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "tags",
          "in" : "query",
          "description" : "Tags to filter by",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Pet"
              }
            }
          },
          "400" : {
            "description" : "Invalid tag value"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ],
        "deprecated" : true
      }
    },
    "/pet/pets/{petName}" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Finds Pets by name",
        "description" : "",
        "operationId" : "findPetByPetName",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "petName",
          "in" : "path",
          "description" : "petName",
          "required" : true,
          "type" : "string",
          "pattern" : "[^/]*"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Pet"
              }
            }
          },
          "400" : {
            "description" : "Invalid status value"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Test pet as json string in query",
        "description" : "",
        "operationId" : "test",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "pet",
          "in" : "query",
          "description" : "describe Pet in json here",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test/apiimplicitparams/{path-test-name}" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Test apiimplicitparams",
        "description" : "",
        "operationId" : "testapiimplicitparams",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "header-test-name",
          "in" : "header",
          "description" : "header-test-value",
          "required" : true,
          "type" : "string",
          "default" : "z"
        }, {
          "name" : "path-test-name",
          "in" : "path",
          "description" : "path-test-value",
          "required" : true,
          "type" : "string",
          "default" : "path-test-defaultValue"
        }, {
          "in" : "body",
          "name" : "body-test-name",
          "description" : "body-test-value",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Pet"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test/extensions" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "testExtensions",
        "description" : "",
        "operationId" : "testingExtensions",
        "produces" : [ "text/plain" ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ],
        "x-extensionName3" : "extensionValue3",
        "x-firstExtension" : {
          "extensionName2" : "extensionValue2",
          "extensionName1" : "extensionValue1"
        }
      }
    },
    "/pet/test/testFormApiImplicitParams" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Test testFormApiImplicitParams",
        "description" : "",
        "operationId" : "testFormApiImplicitParams",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "form-test-name",
          "in" : "formData",
          "description" : "form-test-value",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "form-test-defaultValue"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test/testingArrayResponse" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "testingArrayResponse",
        "description" : "",
        "operationId" : "testingArrayResponse",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "200" : {
            "description" : "array",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Pet"
              }
            }
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test/testingBasicAuth" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "testingBasicAuth",
        "description" : "",
        "operationId" : "testingBasicAuth",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "string"
            }
          }
        },
        "security" : [ {
          "basicAuth" : [ ]
        }, {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/test/testingVendorExtensions" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "testingVendorExtensions",
        "description" : "",
        "operationId" : "testingVendorExtensions",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "401" : {
            "description" : "Some vendor error description"
          },
          "default" : {
            "description" : "successful operation"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/{petId}" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Find pet by ID",
        "description" : "Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions",
        "operationId" : "getPetById",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "petId",
          "in" : "path",
          "description" : "ID of pet that needs to be fetched",
          "required" : true,
          "type" : "integer",
          "maximum" : 5,
          "minimum" : 1,
          "pattern" : "[0-9]",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Pet not found"
          }
        },
        "security" : [ {
          "api_key" : [ ]
        }, {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      },
      "post" : {
        "tags" : [ "pet" ],
        "summary" : "Updates a pet in the store with form data",
        "description" : "",
        "operationId" : "updatePetWithForm",
        "consumes" : [ "application/x-www-form-urlencoded" ],
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "petId",
          "in" : "path",
          "description" : "ID of pet that needs to be updated",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "formData",
          "description" : "Updated name of the pet",
          "required" : false,
          "type" : "string",
          "default" : "defaultValue"
        }, {
          "name" : "status",
          "in" : "formData",
          "description" : "Updated status of the pet",
          "required" : false,
          "type" : "string",
          "enum" : [ "value1", "value2" ]
        }, {
          "name" : "myHeader",
          "in" : "header",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "intValue",
          "in" : "header",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "listValue",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "testIntegerAllowableValues",
          "in" : "query",
          "description" : "testIntegerAllowableValues",
          "required" : false,
          "type" : "integer",
          "default" : 25,
          "format" : "int32",
          "enum" : [ 25, 50, 100 ]
        }, {
          "name" : "myParentHeader",
          "in" : "header",
          "description" : "Header from parent",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "405" : {
            "description" : "Invalid input"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      },
      "delete" : {
        "tags" : [ "pet" ],
        "summary" : "Deletes a pet",
        "description" : "",
        "operationId" : "removePet",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "api_key",
          "in" : "header",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "petId",
          "in" : "path",
          "description" : "Pet id to delete",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid pet value"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/{petId}/testInjectParam" : {
      "post" : {
        "tags" : [ "pet" ],
        "summary" : "Updates a pet in the store with form data",
        "description" : "",
        "operationId" : "updatePetWithFormViaInjectParam",
        "consumes" : [ "application/x-www-form-urlencoded" ],
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "petId",
          "in" : "path",
          "description" : "ID of pet that needs to be updated",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "formData",
          "description" : "Updated name of the pet",
          "required" : false,
          "type" : "string",
          "default" : "defaultValue"
        }, {
          "name" : "status",
          "in" : "formData",
          "description" : "Updated status of the pet",
          "required" : false,
          "type" : "string",
          "enum" : [ "value1", "value2" ]
        }, {
          "name" : "myHeader",
          "in" : "header",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "intValue",
          "in" : "header",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "listValue",
          "in" : "query",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "testIntegerAllowableValues",
          "in" : "query",
          "description" : "testIntegerAllowableValues",
          "required" : false,
          "type" : "integer",
          "default" : 25,
          "format" : "int32",
          "enum" : [ 25, 50, 100 ]
        }, {
          "name" : "myParentHeader",
          "in" : "header",
          "description" : "Header from parent",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "405" : {
            "description" : "Invalid input"
          }
        },
        "security" : [ {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/pet/{startId}:{endId}" : {
      "get" : {
        "tags" : [ "pet" ],
        "summary" : "Find pet(s) by ID",
        "description" : "This is a contrived example of a path segment containing multiple path parameters, separated by a character which may be present in the path parameter template. You may think that it returns a range of pets from startId to endId, inclusive, but it doesn't.",
        "operationId" : "getPetsById",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "startId",
          "in" : "path",
          "description" : "start ID of pets that need to be fetched",
          "required" : true,
          "type" : "integer",
          "maximum" : 99,
          "minimum" : 1,
          "pattern" : "[0-9]{1,2}",
          "format" : "int64"
        }, {
          "name" : "endId",
          "in" : "path",
          "description" : "end ID of pets that need to be fetched",
          "required" : true,
          "type" : "integer",
          "maximum" : 99,
          "minimum" : 1,
          "pattern" : "[0-9]{1,2}",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Pet"
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Pet not found"
          }
        },
        "security" : [ {
          "api_key" : [ ]
        }, {
          "petstore_auth" : [ "write:pets", "read:pets" ]
        } ]
      }
    },
    "/store/order" : {
      "post" : {
        "tags" : [ "store" ],
        "summary" : "Place an order for a pet",
        "description" : "",
        "operationId" : "placeOrder",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "order placed for purchasing the pet",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Order"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Order"
            }
          },
          "400" : {
            "description" : "Invalid Order"
          }
        }
      }
    },
    "/store/order/{orderId}" : {
      "get" : {
        "tags" : [ "store" ],
        "summary" : "Find purchase order by ID",
        "description" : "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId" : "getOrderById",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "orderId",
          "in" : "path",
          "description" : "ID of pet that needs to be fetched",
          "required" : true,
          "type" : "string",
          "maximum" : 5,
          "minimum" : 1
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Order"
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Order not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "store" ],
        "summary" : "Delete purchase order by ID",
        "description" : "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId" : "deleteOrder",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "orderId",
          "in" : "path",
          "description" : "ID of the order that needs to be deleted",
          "required" : true,
          "type" : "string",
          "minimum" : 1
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Order not found"
          }
        }
      }
    },
    "/store/orders/{orderIds}" : {
      "get" : {
        "tags" : [ "store" ],
        "summary" : "Find multiple purchase orders by IDs",
        "description" : "For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",
        "operationId" : "getOrdersById",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "orderIds",
          "in" : "path",
          "description" : "IDs of pets that needs to be fetched",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "csv"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Order"
              }
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Order not found"
          }
        }
      }
    },
    "/store/pingGet" : {
      "get" : {
        "tags" : [ "store" ],
        "summary" : "Simple ping endpoint",
        "description" : "",
        "operationId" : "pingGet",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "200" : {
            "description" : "Successful request - see response for 'pong'",
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "/store/pingPost" : {
      "post" : {
        "tags" : [ "store" ],
        "summary" : "Simple ping endpoint",
        "description" : "",
        "operationId" : "pingPost",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "200" : {
            "description" : "Successful request - see response for 'pong'",
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "/store/pingPut" : {
      "put" : {
        "tags" : [ "store" ],
        "summary" : "Simple ping endpoint",
        "description" : "",
        "operationId" : "pingPut",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "200" : {
            "description" : "Successful request - see response for 'pong'",
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "/user" : {
      "post" : {
        "tags" : [ "user" ],
        "summary" : "Create user",
        "description" : "This can only be done by the logged in user.",
        "operationId" : "createUser",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Created user object",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/User"
          }
        } ],
        "responses" : {
          "default" : {
            "description" : "successful operation"
          }
        }
      }
    },
    "/user/createWithArray" : {
      "post" : {
        "tags" : [ "user" ],
        "summary" : "Creates list of users with given input array",
        "description" : "",
        "operationId" : "createUsersWithArrayInput",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "List of user object",
          "required" : true,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/User"
            }
          }
        } ],
        "responses" : {
          "default" : {
            "description" : "successful operation"
          }
        }
      }
    },
    "/user/createWithList" : {
      "post" : {
        "tags" : [ "user" ],
        "summary" : "Creates list of users with given input array",
        "description" : "",
        "operationId" : "createUsersWithListInput",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "List of user object",
          "required" : true,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/User"
            }
          }
        } ],
        "responses" : {
          "default" : {
            "description" : "successful operation"
          }
        }
      }
    },
    "/user/login" : {
      "get" : {
        "tags" : [ "user" ],
        "summary" : "Logs user into the system",
        "description" : "",
        "operationId" : "loginUser",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "username",
          "in" : "query",
          "description" : "The user name for login",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "password",
          "in" : "query",
          "description" : "The password for login in clear text",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "type" : "string"
            }
          },
          "400" : {
            "description" : "Invalid username/password supplied"
          }
        }
      }
    },
    "/user/logout" : {
      "get" : {
        "tags" : [ "user" ],
        "summary" : "Logs out current logged in user session",
        "description" : "",
        "operationId" : "logoutUser",
        "produces" : [ "application/json", "application/xml" ],
        "responses" : {
          "default" : {
            "description" : "successful operation"
          }
        }
      }
    },
    "/user/{username}" : {
      "get" : {
        "tags" : [ "user" ],
        "summary" : "Get user by user name",
        "description" : "",
        "operationId" : "getUserByName",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "username",
          "in" : "path",
          "description" : "The name that needs to be fetched. Use user1 for testing. ",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "400" : {
            "description" : "Invalid username supplied"
          },
          "404" : {
            "description" : "User not found"
          }
        }
      },
      "put" : {
        "tags" : [ "user" ],
        "summary" : "Updated user",
        "description" : "This can only be done by the logged in user.",
        "operationId" : "updateUser",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "username",
          "in" : "path",
          "description" : "name that need to be deleted",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Updated user object",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/User"
          }
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid user supplied"
          },
          "404" : {
            "description" : "User not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "user" ],
        "summary" : "Delete user",
        "description" : "This can only be done by the logged in user.",
        "operationId" : "deleteUser",
        "produces" : [ "application/json", "application/xml" ],
        "parameters" : [ {
          "name" : "username",
          "in" : "path",
          "description" : "The name that needs to be deleted",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid username supplied"
          },
          "404" : {
            "description" : "User not found"
          }
        }
      }
    }
  },
  "securityDefinitions" : {
    "api_key" : {
      "type" : "apiKey",
      "name" : "api_key",
      "in" : "header"
    },
    "basicAuth" : {
      "type" : "basic"
    },
    "petstore_auth" : {
      "type" : "oauth2",
      "authorizationUrl" : "http://swagger.io/api/oauth/dialog",
      "flow" : "implicit",
      "scopes" : {
        "write:pets" : "modify pets in your account",
        "read:pets" : "read your pets"
      }
    }
  },
  "definitions" : {
    "Category" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "Category"
      }
    },
    "Order" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "petId" : {
          "type" : "integer",
          "format" : "int64"
        },
        "quantity" : {
          "type" : "integer",
          "format" : "int32"
        },
        "shipDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "status" : {
          "type" : "string",
          "description" : "Order Status",
          "enum" : [ "placed", "approved", "delivered" ]
        },
        "complete" : {
          "type" : "boolean"
        },
        "optionalStatus" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "Order"
      }
    },
    "Pet" : {
      "type" : "object",
      "required" : [ "name", "photoUrls" ],
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "category" : {
          "$ref" : "#/definitions/Category"
        },
        "name" : {
          "type" : "string",
          "example" : "doggie"
        },
        "photoUrls" : {
          "type" : "array",
          "xml" : {
            "wrapped" : true
          },
          "items" : {
            "type" : "string",
            "xml" : {
              "name" : "photoUrl"
            }
          }
        },
        "tags" : {
          "type" : "array",
          "xml" : {
            "wrapped" : true
          },
          "items" : {
            "xml" : {
              "name" : "tag"
            },
            "$ref" : "#/definitions/Tag"
          }
        },
        "status" : {
          "type" : "string",
          "description" : "pet status in the store",
          "enum" : [ "available", "pending", "sold" ]
        }
      },
      "xml" : {
        "name" : "Pet"
      }
    },
    "Tag" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "name" : {
          "type" : "string"
        }
      },
      "xml" : {
        "name" : "Tag"
      }
    },
    "User" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "username" : {
          "type" : "string"
        },
        "firstName" : {
          "type" : "string"
        },
        "lastName" : {
          "type" : "string"
        },
        "email" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        },
        "phone" : {
          "type" : "string"
        },
        "userStatus" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 2,
          "description" : "User Status"
        }
      },
      "xml" : {
        "name" : "User"
      }
    }
  }
}