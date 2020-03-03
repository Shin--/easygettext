var walk = require( 'estree-walker' ).walk
const {DEFAULT_VUE_GETTEXT_FUNCTIONS} = require('./constants.js');

let parsed = {
  'type': 'Program',
  'sourceType': 'module',
  'body': [
    {
      'type': 'ExportDefaultDeclaration',
      'declaration': {
        'type': 'ClassDeclaration',
        'id': {
          'type': 'Identifier',
          'name': 'PermissionUsersTableRow'
        },
        'superClass': {
          'type': 'Identifier',
          'name': 'Vue'
        },
        'body': {
          'type': 'ClassBody',
          'body': [
            {
              'type': 'ClassProperty',
              'key': {
                'type': 'Identifier',
                'name': 'test',
                'optional': false,
                'typeAnnotation': null
              },
              'value': null,
              'computed': false,
              'static': false,
              'readonly': false,
              'decorators': [
                {
                  'type': 'Decorator',
                  'expression': {
                    'type': 'CallExpression',
                    'callee': {
                      'type': 'Identifier',
                      'name': 'Prop'
                    },
                    'arguments': [
                      {
                        'type': 'ObjectExpression',
                        'properties': [
                          {
                            'type': 'Property',
                            'key': {
                              'type': 'Identifier',
                              'name': 'default'
                            },
                            'value': {
                              'type': 'CallExpression',
                              'callee': {
                                'type': 'MemberExpression',
                                'object': {
                                  'type': 'ThisExpression'
                                },
                                'computed': false,
                                'property': {
                                  'type': 'Identifier',
                                  'name': '$gettext'
                                }
                              },
                              'arguments': [
                                {
                                  'type': 'Literal',
                                  'value': 'Tim'
                                }
                              ],
                              'typeParameters': null
                            },
                            'kind': 'init',
                            'computed': false,
                            'method': false,
                            'shorthand': false
                          }
                        ],
                        'typeAnnotation': [],
                        'optional': false,
                        'decorators': []
                      }
                    ],
                    'typeParameters': null
                  }
                }
              ],
              'accessibility': null,
              'optional': false,
              'definite': false,
              'typeAnnotation': {
                'type': 'TypeAnnotation',
                'typeAnnotation': {
                  'type': 'StringKeyword'
                }
              }
            },
            {
              'type': 'ClassProperty',
              'key': {
                'type': 'Identifier',
                'name': 'hovering',
                'optional': false,
                'typeAnnotation': null
              },
              'value': {
                'type': 'Literal',
                'value': false
              },
              'computed': false,
              'static': false,
              'readonly': false,
              'decorators': [],
              'accessibility': null,
              'optional': false,
              'definite': false,
              'typeAnnotation': {
                'type': 'TypeAnnotation',
                'typeAnnotation': {
                  'type': 'BooleanKeyword'
                }
              }
            },
            {
              'type': 'ClassProperty',
              'key': {
                'type': 'Identifier',
                'name': 'npGetTextVal',
                'optional': false,
                'typeAnnotation': null
              },
              'value': {
                'type': 'CallExpression',
                'callee': {
                  'type': 'MemberExpression',
                  'object': {
                    'type': 'Identifier',
                    'name': 'vm'
                  },
                  'computed': false,
                  'property': {
                    'type': 'Identifier',
                    'name': '$npgettext'
                  }
                },
                'arguments': [
                  {
                    'type': 'ObjectExpression',
                    'properties': [],
                    'typeAnnotation': [],
                    'optional': false,
                    'decorators': []
                  },
                  {
                    'type': 'Literal',
                    'value': 'Singular'
                  },
                  {
                    'type': 'Literal',
                    'value': 'plural'
                  },
                  {
                    'type': 'Literal',
                    'value': 2
                  }
                ],
                'typeParameters': null
              },
              'computed': false,
              'static': false,
              'readonly': false,
              'decorators': [],
              'accessibility': null,
              'optional': false,
              'definite': false,
              'typeAnnotation': []
            },
            {
              'type': 'ClassProperty',
              'key': {
                'type': 'Identifier',
                'name': 'function',
                'optional': false,
                'typeAnnotation': null
              },
              'value': null,
              'computed': false,
              'static': false,
              'readonly': false,
              'decorators': [],
              'accessibility': null,
              'optional': false,
              'definite': false,
              'typeAnnotation': []
            },
            {
              'type': 'MethodDefinition',
              'kind': 'method',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'name': 'getName',
                'optional': false,
                'typeAnnotation': null
              },
              'decorators': [],
              'value': {
                'type': 'FunctionExpression',
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'body': [
                    {
                      'type': 'ReturnStatement',
                      'argument': {
                        'type': 'CallExpression',
                        'callee': {
                          'type': 'MemberExpression',
                          'object': {
                            'type': 'ThisExpression'
                          },
                          'computed': false,
                          'property': {
                            'type': 'Identifier',
                            'name': '$gettext'
                          }
                        },
                        'arguments': [
                          {
                            'type': 'Literal',
                            'value': 'Tim'
                          }
                        ],
                        'typeParameters': null
                      }
                    }
                  ]
                },
                'async': false,
                'generator': false,
                'id': null,
                'returnType': null,
                'typeParameters': null,
                'declare': false
              },
              'accessibility': null,
              'typeParameters': null
            },
            {
              'type': 'ClassProperty',
              'key': {
                'type': 'Identifier',
                'name': 'function',
                'optional': false,
                'typeAnnotation': null
              },
              'value': null,
              'computed': false,
              'static': false,
              'readonly': false,
              'decorators': [],
              'accessibility': null,
              'optional': false,
              'definite': false,
              'typeAnnotation': []
            },
            {
              'type': 'MethodDefinition',
              'kind': 'method',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'name': 'getPlural',
                'optional': false,
                'typeAnnotation': null
              },
              'decorators': [],
              'value': {
                'type': 'FunctionExpression',
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'body': [
                    {
                      'type': 'ReturnStatement',
                      'argument': {
                        'type': 'CallExpression',
                        'callee': {
                          'type': 'MemberExpression',
                          'object': {
                            'type': 'ThisExpression'
                          },
                          'computed': false,
                          'property': {
                            'type': 'Identifier',
                            'name': '$ngettext'
                          }
                        },
                        'arguments': [
                          {
                            'type': 'Literal',
                            'value': 'Tim'
                          },
                          {
                            'type': 'BinaryExpression',
                            'left': {
                              'type': 'BinaryExpression',
                              'left': {
                                'type': 'Literal',
                                'value': 'Tims and '
                              },
                              'right': {
                                'type': 'Literal',
                                'value': 'Tims'
                              },
                              'operator': '+'
                            },
                            'right': {
                              'type': 'Literal',
                              'value': 'Tims'
                            },
                            'operator': '+'
                          },
                          {
                            'type': 'Literal',
                            'value': 2
                          }
                        ],
                        'typeParameters': null
                      }
                    }
                  ]
                },
                'async': false,
                'generator': false,
                'id': null,
                'returnType': null,
                'typeParameters': null,
                'declare': false
              },
              'accessibility': null,
              'typeParameters': null
            },
            {
              'type': 'MethodDefinition',
              'kind': 'get',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'name': 'someTest'
              },
              'decorators': [],
              'value': {
                'type': 'FunctionExpression',
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'body': [
                    {
                      'type': 'VariableDeclaration',
                      'kind': 'let',
                      'declarations': [
                        {
                          'type': 'VariableDeclarator',
                          'init': {
                            'type': 'CallExpression',
                            'callee': {
                              'type': 'MemberExpression',
                              'object': {
                                'type': 'ThisExpression'
                              },
                              'computed': false,
                              'property': {
                                'type': 'Identifier',
                                'name': '$gettext'
                              }
                            },
                            'arguments': [
                              {
                                'type': 'Literal',
                                'value': 'Hmmmm'
                              }
                            ],
                            'typeParameters': null
                          },
                          'id': {
                            'type': 'Identifier',
                            'name': 'x',
                            'optional': false,
                            'typeAnnotation': []
                          },
                          'definite': false
                        }
                      ]
                    },
                    {
                      'type': 'ReturnStatement',
                      'argument': {
                        'type': 'Identifier',
                        'name': 'x'
                      }
                    }
                  ]
                },
                'async': false,
                'generator': false,
                'id': null,
                'returnType': null,
                'typeParameters': null,
                'declare': false
              },
              'accessibility': null,
              'typeParameters': null
            }
          ]
        },
        'typeParameters': null,
        'superTypeParameters': [],
        'implements': [],
        'abstract': false,
        'declare': false,
        'decorators': []
      }
    },
    {
      'type': 'FunctionDeclaration',
      'params': [
        {
          'type': 'Identifier',
          'name': 'x',
          'optional': false,
          'typeAnnotation': {
            'type': 'TypeAnnotation',
            'typeAnnotation': {
              'type': 'NumberKeyword'
            }
          }
        }
      ],
      'body': {
        'type': 'BlockStatement',
        'body': [
          {
            'type': 'ReturnStatement',
            'argument': {
              'type': 'CallExpression',
              'callee': {
                'type': 'Identifier',
                'name': '$ngettext'
              },
              'arguments': [
                {
                  'type': 'Literal',
                  'value': 'test function'
                },
                {
                  'type': 'Literal',
                  'value': 'test functions'
                },
                {
                  'type': 'Identifier',
                  'name': 'x'
                }
              ],
              'typeParameters': null
            }
          }
        ]
      },
      'async': false,
      'generator': false,
      'id': {
        'type': 'Identifier',
        'name': 'test'
      },
      'typeParameters': null,
      'returnType': null,
      'declare': false
    },
    {
      'type': 'VariableDeclaration',
      'kind': 'const',
      'declare': false,
      'declarations': [
        {
          'type': 'VariableDeclarator',
          'init': {
            'type': 'ArrowFunctionExpression',
            'body': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'ReturnStatement',
                  'argument': {
                    'type': 'CallExpression',
                    'callee': {
                      'type': 'Identifier',
                      'name': '$ngettext'
                    },
                    'arguments': [
                      {
                        'type': 'Literal',
                        'value': 'test function'
                      },
                      {
                        'type': 'Literal',
                        'value': 'test functions'
                      },
                      {
                        'type': 'Identifier',
                        'name': 'x'
                      }
                    ],
                    'typeParameters': null
                  }
                }
              ]
            },
            'params': [
              {
                'type': 'Identifier',
                'name': 'x',
                'optional': 0,
                'typeAnnotation': {
                  'type': 'TypeAnnotation',
                  'typeAnnotation': {
                    'type': 'NumberKeyword'
                  }
                }
              }
            ],
            'async': false,
            'expression': false,
            'returnType': null,
            'typeParameters': []
          },
          'id': {
            'type': 'Identifier',
            'name': 'arrowTest',
            'optional': false,
            'typeAnnotation': []
          },
          'definite': false
        }
      ]
    }
  ]
};

// console.log('hi', parsed.hasOwnProperty('body'));
// if (parsed.hasOwnProperty('body')) {
//   const body = parsed['body'];
//   for (let bodyIdx = 0; bodyIdx < body.length; bodyIdx += 1) {
//     console.log(body[bodyIdx]);
//   }
// }
/**
"type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "type": "MemberExpression",
      "object": {
        "type": "ThisExpression"
      },
      "computed": false,
      "property": {
        "type": "Identifier",
        "name": "something"
      }
    },
    "computed": false,
    "property": {
      "type": "Identifier",
      "name": "$gettext"
    }
  },
  "arguments": [
    {
      "type": "Literal",
      "value": "default string"
    }
  ],
  "typeParameters": null
 */


const DEFAULT_VUE_GETTEXT_FUNCTIONS_KEYS = Object.keys(DEFAULT_VUE_GETTEXT_FUNCTIONS);

function getGettextFunctionName(obj) {
  if (obj.property && DEFAULT_VUE_GETTEXT_FUNCTIONS_KEYS.includes(obj.property.name)) {
    return obj.property.name;
  } else if (obj.object) {
    return getGettextFunctionName(obj.object);
  }
  return undefined;
}

function getTranslationString(obj) {
  if (obj.type === 'Literal') {
    return obj.value;
  } else if (obj.type === 'BinaryExpression' && obj.operator === '+') {
    return getTranslationString(obj.left) + getTranslationString(obj.right);
  }
  return '';
}

let translationEntries = [];

walk( parsed, {
  enter: function(node, parent) {
    if (node.type && node.type === 'CallExpression' && node.callee) {
      if (DEFAULT_VUE_GETTEXT_FUNCTIONS_KEYS.includes(node.callee.name)) {
        console.log("arguments 1:", node.arguments)
      } else {
        let gettextFunctionName = getGettextFunctionName(node.callee)
        if (DEFAULT_VUE_GETTEXT_FUNCTIONS_KEYS.includes(gettextFunctionName)) {
          let gettextFunctionArgs = DEFAULT_VUE_GETTEXT_FUNCTIONS[gettextFunctionName]
          let translationEntry = {}
          for (let i = 0; i < gettextFunctionArgs.length; i += 1) {
            // console.log(gettextFunctionArgs[i], '=', getTranslationString(node.arguments[i]))
            translationEntry[gettextFunctionArgs[i]] = getTranslationString(node.arguments[i]);
            // console.log("get", node.arguments[i], "receive", getTranslationString(node.arguments[i]))
          }
          translationEntries.push(translationEntry);
        }
      }
    }
  }
});

console.log("results", translationEntries)
