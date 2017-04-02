/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!shouldCaptureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

let shouldCaptureLocations = true;

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[0,4,(_1,_2,_3,_4,_1loc,_2loc,_3loc,_4loc) => { __loc = yyloc(_1loc, _4loc);
      __ = Node({
        type: 'RegExp',
        body: _2,
        flags: checkFlags(_4),
      }, loc(_1loc, _4loc || _3loc))
     }],
[1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[1,0,() => { __loc = null; __ = ''  }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[2,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); __ = _1 + _2  }],
[3,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[4,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[4,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: 'Disjunction',
        left: _1,
        right: _3,
      }, __loc)
     }],
[5,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      if (_1.length === 0) {
        __ = null;
        return;
      }

      if (_1.length === 1) {
        __ = Node(_1[0], __loc);
      } else {
        __ = Node({
          type: 'Alternative',
          expressions: _1,
        }, __loc)
      }
     }],
[6,0,() => { __loc = null; __ = []  }],
[6,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); __ = _1; _1.push(_2)  }],
[7,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Node(Object.assign({type: 'Assertion'}, _1), __loc)  }],
[7,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc);
      __ = _1;

      if (_2) {
        __ = Node({
          type: 'Repetition',
          expression: _1,
          quantifier: _2,
        }, __loc)
      }
     }],
[8,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { kind: '^' }  }],
[8,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { kind: '$' }  }],
[8,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { kind: '\\b' }  }],
[8,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = { kind: '\\B' }  }],
[8,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: 'Lookahead',
        assertion: _2,
      }
     }],
[8,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        kind: 'Lookahead',
        negative: true,
        assertion: _2,
      }
     }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'simple', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1.slice(1), 'simple', __loc); __.escaped = true;  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'unicode', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'control', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'hex', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'oct', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      const reference = Number(_1.slice(1));

      if (reference > 0 && reference <= capturingGroupsCount) {
        __ = Node({
          type: 'Backreference',
          reference,
        }, __loc);
        return;
      }

      __ = Char(_1, 'decimal', __loc);
     }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'meta', __loc)  }],
[10,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'meta', __loc)  }],
[11,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[11,0],
[12,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[12,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc);
      _1.greedy = false;
      __ = _1;
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: 'Quantifier',
        kind: _1,
        greedy: true,
      }, __loc)
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: 'Quantifier',
        kind: _1,
        greedy: true,
      }, __loc)
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: 'Quantifier',
        kind: _1,
        greedy: true,
      }, __loc)
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      const range = getRange(_1);
      __ = Node({
        type: 'Quantifier',
        kind: 'Range',
        from: range[0],
        to: range[0],
        greedy: true,
      }, __loc)
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      __ = Node({
        type: 'Quantifier',
        kind: 'Range',
        from: getRange(_1)[0],
        greedy: true,
      }, __loc)
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      const range = getRange(_1);
      __ = Node({
        type: 'Quantifier',
        kind: 'Range',
        from: range[0],
        to: range[1],
        greedy: true,
      }, __loc)
     }],
[14,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[14,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[15,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      capturingGroupsCount++;
      __ = Node({
        type: 'Group',
        capturing: true,
        expression: _2,
      }, __loc)
     }],
[16,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: 'Group',
        capturing: false,
        expression: _2,
      }, __loc)
     }],
[17,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: 'CharacterClass',
        negative: true,
        expressions: _2,
      }, __loc)
     }],
[17,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = Node({
        type: 'CharacterClass',
        expressions: _2,
      }, __loc)
     }],
[18,0],
[18,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[19,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[19,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); __ = [_1].concat(_2)  }],
[19,4,(_1,_2,_3,_4,_1loc,_2loc,_3loc,_4loc) => { __loc = yyloc(_1loc, _4loc);
      __ = [
        Node({
          type: 'ClassRange',
          from: _1,
          to: _3,
        }, loc(_1loc, _3loc))
      ];

      if (_4) {
        __ = __.concat(_4);
      }
     }],
[20,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[20,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); __ = [_1].concat(_2)  }],
[20,4,(_1,_2,_3,_4,_1loc,_2loc,_3loc,_4loc) => { __loc = yyloc(_1loc, _4loc);
      __ = [
        Node({
          type: 'ClassRange',
          from: _1,
          to: _3,
        }, loc(_1loc, _3loc)),
      ];

      if (_4) {
        __ = __.concat(_4);
      }
     }],
[21,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'simple', __loc)  }],
[21,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[22,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[22,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = Char(_1, 'meta', __loc)  }]];

/**
 * Encoded tokens map.
 */
const tokens = {"SLASH":"23","CHAR":"24","BAR":"25","BOS":"26","EOS":"27","ESC_b":"28","ESC_B":"29","POS_LA_ASSERT":"30","R_PAREN":"31","NEG_LA_ASSERT":"32","ESC_CHAR":"33","U_CODE":"34","CTRL_CH":"35","HEX_CODE":"36","OCT_CODE":"37","DEC_CODE":"38","META_CHAR":"39","ANY":"40","Q_MARK":"41","STAR":"42","PLUS":"43","RANGE_EXACT":"44","RANGE_OPEN":"45","RANGE_CLOSED":"46","L_PAREN":"47","NON_CAPTURE_GROUP":"48","NEG_CLASS":"49","R_BRACKET":"50","L_BRACKET":"51","DASH":"52","$":"53"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":71,"23":"s1"},{"3":2,"4":3,"5":4,"6":5,"23":"r10","24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"23":"s6"},{"23":"r6","25":"s10"},{"23":"r7","25":"r7","31":"r7"},{"7":12,"8":13,"9":14,"10":21,"14":23,"15":35,"16":36,"17":22,"23":"r9","24":"s24","25":"r9","26":"s15","27":"s16","28":"s17","29":"s18","30":"s19","31":"r9","32":"s20","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","47":"s37","48":"s38","49":"s33","51":"s34"},{"1":72,"2":7,"24":"s8","53":"r3"},{"24":"s9","53":"r2"},{"24":"r4","53":"r4"},{"24":"r5","53":"r5"},{"5":11,"6":5,"23":"r10","24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","31":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"23":"r8","25":"r8","31":"r8"},{"23":"r11","24":"r11","25":"r11","26":"r11","27":"r11","28":"r11","29":"r11","30":"r11","31":"r11","32":"r11","33":"r11","34":"r11","35":"r11","36":"r11","37":"r11","38":"r11","39":"r11","40":"r11","47":"r11","48":"r11","49":"r11","51":"r11"},{"23":"r12","24":"r12","25":"r12","26":"r12","27":"r12","28":"r12","29":"r12","30":"r12","31":"r12","32":"r12","33":"r12","34":"r12","35":"r12","36":"r12","37":"r12","38":"r12","39":"r12","40":"r12","47":"r12","48":"r12","49":"r12","51":"r12"},{"11":39,"12":40,"13":41,"23":"r33","24":"r33","25":"r33","26":"r33","27":"r33","28":"r33","29":"r33","30":"r33","31":"r33","32":"r33","33":"r33","34":"r33","35":"r33","36":"r33","37":"r33","38":"r33","39":"r33","40":"r33","41":"s44","42":"s42","43":"s43","44":"s45","45":"s46","46":"s47","47":"r33","48":"r33","49":"r33","51":"r33"},{"23":"r14","24":"r14","25":"r14","26":"r14","27":"r14","28":"r14","29":"r14","30":"r14","31":"r14","32":"r14","33":"r14","34":"r14","35":"r14","36":"r14","37":"r14","38":"r14","39":"r14","40":"r14","47":"r14","48":"r14","49":"r14","51":"r14"},{"23":"r15","24":"r15","25":"r15","26":"r15","27":"r15","28":"r15","29":"r15","30":"r15","31":"r15","32":"r15","33":"r15","34":"r15","35":"r15","36":"r15","37":"r15","38":"r15","39":"r15","40":"r15","47":"r15","48":"r15","49":"r15","51":"r15"},{"23":"r16","24":"r16","25":"r16","26":"r16","27":"r16","28":"r16","29":"r16","30":"r16","31":"r16","32":"r16","33":"r16","34":"r16","35":"r16","36":"r16","37":"r16","38":"r16","39":"r16","40":"r16","47":"r16","48":"r16","49":"r16","51":"r16"},{"23":"r17","24":"r17","25":"r17","26":"r17","27":"r17","28":"r17","29":"r17","30":"r17","31":"r17","32":"r17","33":"r17","34":"r17","35":"r17","36":"r17","37":"r17","38":"r17","39":"r17","40":"r17","47":"r17","48":"r17","49":"r17","51":"r17"},{"4":49,"5":4,"6":5,"24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","31":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"4":51,"5":4,"6":5,"24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","31":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"23":"r20","24":"r20","25":"r20","26":"r20","27":"r20","28":"r20","29":"r20","30":"r20","31":"r20","32":"r20","33":"r20","34":"r20","35":"r20","36":"r20","37":"r20","38":"r20","39":"r20","40":"r20","41":"r20","42":"r20","43":"r20","44":"r20","45":"r20","46":"r20","47":"r20","48":"r20","49":"r20","51":"r20"},{"23":"r21","24":"r21","25":"r21","26":"r21","27":"r21","28":"r21","29":"r21","30":"r21","31":"r21","32":"r21","33":"r21","34":"r21","35":"r21","36":"r21","37":"r21","38":"r21","39":"r21","40":"r21","41":"r21","42":"r21","43":"r21","44":"r21","45":"r21","46":"r21","47":"r21","48":"r21","49":"r21","51":"r21"},{"23":"r22","24":"r22","25":"r22","26":"r22","27":"r22","28":"r22","29":"r22","30":"r22","31":"r22","32":"r22","33":"r22","34":"r22","35":"r22","36":"r22","37":"r22","38":"r22","39":"r22","40":"r22","41":"r22","42":"r22","43":"r22","44":"r22","45":"r22","46":"r22","47":"r22","48":"r22","49":"r22","51":"r22"},{"23":"r23","24":"r23","25":"r23","26":"r23","27":"r23","28":"r23","29":"r23","30":"r23","31":"r23","32":"r23","33":"r23","34":"r23","35":"r23","36":"r23","37":"r23","38":"r23","39":"r23","40":"r23","41":"r23","42":"r23","43":"r23","44":"r23","45":"r23","46":"r23","47":"r23","48":"r23","49":"r23","50":"r23","51":"r23","52":"r23"},{"23":"r24","24":"r24","25":"r24","26":"r24","27":"r24","28":"r24","29":"r24","30":"r24","31":"r24","32":"r24","33":"r24","34":"r24","35":"r24","36":"r24","37":"r24","38":"r24","39":"r24","40":"r24","41":"r24","42":"r24","43":"r24","44":"r24","45":"r24","46":"r24","47":"r24","48":"r24","49":"r24","50":"r24","51":"r24","52":"r24"},{"23":"r25","24":"r25","25":"r25","26":"r25","27":"r25","28":"r25","29":"r25","30":"r25","31":"r25","32":"r25","33":"r25","34":"r25","35":"r25","36":"r25","37":"r25","38":"r25","39":"r25","40":"r25","41":"r25","42":"r25","43":"r25","44":"r25","45":"r25","46":"r25","47":"r25","48":"r25","49":"r25","50":"r25","51":"r25","52":"r25"},{"23":"r26","24":"r26","25":"r26","26":"r26","27":"r26","28":"r26","29":"r26","30":"r26","31":"r26","32":"r26","33":"r26","34":"r26","35":"r26","36":"r26","37":"r26","38":"r26","39":"r26","40":"r26","41":"r26","42":"r26","43":"r26","44":"r26","45":"r26","46":"r26","47":"r26","48":"r26","49":"r26","50":"r26","51":"r26","52":"r26"},{"23":"r27","24":"r27","25":"r27","26":"r27","27":"r27","28":"r27","29":"r27","30":"r27","31":"r27","32":"r27","33":"r27","34":"r27","35":"r27","36":"r27","37":"r27","38":"r27","39":"r27","40":"r27","41":"r27","42":"r27","43":"r27","44":"r27","45":"r27","46":"r27","47":"r27","48":"r27","49":"r27","50":"r27","51":"r27","52":"r27"},{"23":"r28","24":"r28","25":"r28","26":"r28","27":"r28","28":"r28","29":"r28","30":"r28","31":"r28","32":"r28","33":"r28","34":"r28","35":"r28","36":"r28","37":"r28","38":"r28","39":"r28","40":"r28","41":"r28","42":"r28","43":"r28","44":"r28","45":"r28","46":"r28","47":"r28","48":"r28","49":"r28","50":"r28","51":"r28","52":"r28"},{"23":"r29","24":"r29","25":"r29","26":"r29","27":"r29","28":"r29","29":"r29","30":"r29","31":"r29","32":"r29","33":"r29","34":"r29","35":"r29","36":"r29","37":"r29","38":"r29","39":"r29","40":"r29","41":"r29","42":"r29","43":"r29","44":"r29","45":"r29","46":"r29","47":"r29","48":"r29","49":"r29","50":"r29","51":"r29","52":"r29"},{"23":"r30","24":"r30","25":"r30","26":"r30","27":"r30","28":"r30","29":"r30","30":"r30","31":"r30","32":"r30","33":"r30","34":"r30","35":"r30","36":"r30","37":"r30","38":"r30","39":"r30","40":"r30","41":"r30","42":"r30","43":"r30","44":"r30","45":"r30","46":"r30","47":"r30","48":"r30","49":"r30","50":"r30","51":"r30","52":"r30"},{"23":"r31","24":"r31","25":"r31","26":"r31","27":"r31","28":"r31","29":"r31","30":"r31","31":"r31","32":"r31","33":"r31","34":"r31","35":"r31","36":"r31","37":"r31","38":"r31","39":"r31","40":"r31","41":"r31","42":"r31","43":"r31","44":"r31","45":"r31","46":"r31","47":"r31","48":"r31","49":"r31","50":"r31","51":"r31","52":"r31"},{"10":57,"18":53,"19":73,"21":54,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r48","52":"s55"},{"10":57,"18":65,"19":73,"21":54,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r48","52":"s55"},{"23":"r42","24":"r42","25":"r42","26":"r42","27":"r42","28":"r42","29":"r42","30":"r42","31":"r42","32":"r42","33":"r42","34":"r42","35":"r42","36":"r42","37":"r42","38":"r42","39":"r42","40":"r42","41":"r42","42":"r42","43":"r42","44":"r42","45":"r42","46":"r42","47":"r42","48":"r42","49":"r42","51":"r42"},{"23":"r43","24":"r43","25":"r43","26":"r43","27":"r43","28":"r43","29":"r43","30":"r43","31":"r43","32":"r43","33":"r43","34":"r43","35":"r43","36":"r43","37":"r43","38":"r43","39":"r43","40":"r43","41":"r43","42":"r43","43":"r43","44":"r43","45":"r43","46":"r43","47":"r43","48":"r43","49":"r43","51":"r43"},{"4":67,"5":4,"6":5,"24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","31":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"4":69,"5":4,"6":5,"24":"r10","25":"r10","26":"r10","27":"r10","28":"r10","29":"r10","30":"r10","31":"r10","32":"r10","33":"r10","34":"r10","35":"r10","36":"r10","37":"r10","38":"r10","39":"r10","40":"r10","47":"r10","48":"r10","49":"r10","51":"r10"},{"23":"r13","24":"r13","25":"r13","26":"r13","27":"r13","28":"r13","29":"r13","30":"r13","31":"r13","32":"r13","33":"r13","34":"r13","35":"r13","36":"r13","37":"r13","38":"r13","39":"r13","40":"r13","47":"r13","48":"r13","49":"r13","51":"r13"},{"23":"r32","24":"r32","25":"r32","26":"r32","27":"r32","28":"r32","29":"r32","30":"r32","31":"r32","32":"r32","33":"r32","34":"r32","35":"r32","36":"r32","37":"r32","38":"r32","39":"r32","40":"r32","47":"r32","48":"r32","49":"r32","51":"r32"},{"23":"r34","24":"r34","25":"r34","26":"r34","27":"r34","28":"r34","29":"r34","30":"r34","31":"r34","32":"r34","33":"r34","34":"r34","35":"r34","36":"r34","37":"r34","38":"r34","39":"r34","40":"r34","41":"s48","47":"r34","48":"r34","49":"r34","51":"r34"},{"23":"r36","24":"r36","25":"r36","26":"r36","27":"r36","28":"r36","29":"r36","30":"r36","31":"r36","32":"r36","33":"r36","34":"r36","35":"r36","36":"r36","37":"r36","38":"r36","39":"r36","40":"r36","41":"r36","47":"r36","48":"r36","49":"r36","51":"r36"},{"23":"r37","24":"r37","25":"r37","26":"r37","27":"r37","28":"r37","29":"r37","30":"r37","31":"r37","32":"r37","33":"r37","34":"r37","35":"r37","36":"r37","37":"r37","38":"r37","39":"r37","40":"r37","41":"r37","47":"r37","48":"r37","49":"r37","51":"r37"},{"23":"r38","24":"r38","25":"r38","26":"r38","27":"r38","28":"r38","29":"r38","30":"r38","31":"r38","32":"r38","33":"r38","34":"r38","35":"r38","36":"r38","37":"r38","38":"r38","39":"r38","40":"r38","41":"r38","47":"r38","48":"r38","49":"r38","51":"r38"},{"23":"r39","24":"r39","25":"r39","26":"r39","27":"r39","28":"r39","29":"r39","30":"r39","31":"r39","32":"r39","33":"r39","34":"r39","35":"r39","36":"r39","37":"r39","38":"r39","39":"r39","40":"r39","41":"r39","47":"r39","48":"r39","49":"r39","51":"r39"},{"23":"r40","24":"r40","25":"r40","26":"r40","27":"r40","28":"r40","29":"r40","30":"r40","31":"r40","32":"r40","33":"r40","34":"r40","35":"r40","36":"r40","37":"r40","38":"r40","39":"r40","40":"r40","41":"r40","47":"r40","48":"r40","49":"r40","51":"r40"},{"23":"r41","24":"r41","25":"r41","26":"r41","27":"r41","28":"r41","29":"r41","30":"r41","31":"r41","32":"r41","33":"r41","34":"r41","35":"r41","36":"r41","37":"r41","38":"r41","39":"r41","40":"r41","41":"r41","47":"r41","48":"r41","49":"r41","51":"r41"},{"23":"r35","24":"r35","25":"r35","26":"r35","27":"r35","28":"r35","29":"r35","30":"r35","31":"r35","32":"r35","33":"r35","34":"r35","35":"r35","36":"r35","37":"r35","38":"r35","39":"r35","40":"r35","47":"r35","48":"r35","49":"r35","51":"r35"},{"25":"s10","31":"s50"},{"23":"r18","24":"r18","25":"r18","26":"r18","27":"r18","28":"r18","29":"r18","30":"r18","31":"r18","32":"r18","33":"r18","34":"r18","35":"r18","36":"r18","37":"r18","38":"r18","39":"r18","40":"r18","47":"r18","48":"r18","49":"r18","51":"r18"},{"25":"s10","31":"s52"},{"23":"r19","24":"r19","25":"r19","26":"r19","27":"r19","28":"r19","29":"r19","30":"r19","31":"r19","32":"r19","33":"r19","34":"r19","35":"r19","36":"r19","37":"r19","38":"r19","39":"r19","40":"r19","47":"r19","48":"r19","49":"r19","51":"r19"},{"50":"s59"},{"10":57,"20":74,"21":75,"22":61,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r50","52":"s60"},{"24":"r56","28":"r56","33":"r56","34":"r56","35":"r56","36":"r56","37":"r56","38":"r56","39":"r56","40":"r56","50":"r56","52":"r56"},{"24":"r57","28":"r57","33":"r57","34":"r57","35":"r57","36":"r57","37":"r57","38":"r57","39":"r57","40":"r57","50":"r57","52":"r57"},{"24":"r58","28":"r58","33":"r58","34":"r58","35":"r58","36":"r58","37":"r58","38":"r58","39":"r58","40":"r58","50":"r58","52":"r58"},{"24":"r59","28":"r59","33":"r59","34":"r59","35":"r59","36":"r59","37":"r59","38":"r59","39":"r59","40":"r59","50":"r59","52":"r59"},{"23":"r46","24":"r46","25":"r46","26":"r46","27":"r46","28":"r46","29":"r46","30":"r46","31":"r46","32":"r46","33":"r46","34":"r46","35":"r46","36":"r46","37":"r46","38":"r46","39":"r46","40":"r46","41":"r46","42":"r46","43":"r46","44":"r46","45":"r46","46":"r46","47":"r46","48":"r46","49":"r46","51":"r46"},{"10":57,"21":62,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r56","52":"s55"},{"10":57,"20":77,"21":75,"22":61,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r57","52":"s63"},{"10":57,"18":76,"19":73,"21":54,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r48","52":"s55"},{"10":57,"21":64,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r56","52":"s55"},{"10":57,"18":78,"19":73,"21":54,"22":56,"24":"s24","28":"s58","33":"s25","34":"s26","35":"s27","36":"s28","37":"s29","38":"s30","39":"s31","40":"s32","50":"r48","52":"s55"},{"50":"s66"},{"23":"r47","24":"r47","25":"r47","26":"r47","27":"r47","28":"r47","29":"r47","30":"r47","31":"r47","32":"r47","33":"r47","34":"r47","35":"r47","36":"r47","37":"r47","38":"r47","39":"r47","40":"r47","41":"r47","42":"r47","43":"r47","44":"r47","45":"r47","46":"r47","47":"r47","48":"r47","49":"r47","51":"r47"},{"25":"s10","31":"s68"},{"23":"r44","24":"r44","25":"r44","26":"r44","27":"r44","28":"r44","29":"r44","30":"r44","31":"r44","32":"r44","33":"r44","34":"r44","35":"r44","36":"r44","37":"r44","38":"r44","39":"r44","40":"r44","41":"r44","42":"r44","43":"r44","44":"r44","45":"r44","46":"r44","47":"r44","48":"r44","49":"r44","51":"r44"},{"25":"s10","31":"s70"},{"23":"r45","24":"r45","25":"r45","26":"r45","27":"r45","28":"r45","29":"r45","30":"r45","31":"r45","32":"r45","33":"r45","34":"r45","35":"r45","36":"r45","37":"r45","38":"r45","39":"r45","40":"r45","41":"r45","42":"r45","43":"r45","44":"r45","45":"r45","46":"r45","47":"r45","48":"r45","49":"r45","51":"r45"},{"53":"acc"},{"53":"r1"},{"50":"r49"},{"50":"r51"},{"50":"r53"},{"50":"r52"},{"50":"r54"},{"50":"r55"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^\\-/, function() { return 'ESC_CHAR' }, ["class"]],
[/^-/, function() { return 'DASH' }, ["class"]],
[/^\//, function() { return 'CHAR' }, ["class"]],
[/^\{/, function() { return 'CHAR' }, ["class"]],
[/^\{\d+\}/, function() { return 'RANGE_EXACT' }, ],
[/^\{\d+,\}/, function() { return 'RANGE_OPEN' }, ],
[/^\{\d+,\d+\}/, function() { return 'RANGE_CLOSED' }, ],
[/^\\b/, function() { return 'ESC_b' }, ],
[/^\\B/, function() { return 'ESC_B' }, ],
[/^\\c[a-zA-Z]/, function() { return 'CTRL_CH' }, ],
[/^\\0\d{1,2}/, function() { return 'OCT_CODE' }, ],
[/^\\0/, function() { return 'DEC_CODE' }, ],
[/^\\\d{1,3}/, function() { return 'DEC_CODE' }, ],
[/^\\u[0-9a-fA-F]{4}/, function() { return 'U_CODE' }, ],
[/^\\u\{[0-9a-fA-F]{1,}\}/, function() { return 'U_CODE' }, ],
[/^\\x[0-9a-fA-F]{2}/, function() { return 'HEX_CODE' }, ],
[/^\\[tnrdDsSwWvf]/, function() { return 'META_CHAR' }, ],
[/^\\\//, function() { return 'ESC_CHAR' }, ],
[/^\\[^*?+\[\(\)]/, function() { return 'ESC_CHAR' }, ],
[/^\\[*?+\[]/, function() { return 'ESC_CHAR' }, ],
[/^\(/, function() { return 'CHAR' }, ["class"]],
[/^\)/, function() { return 'CHAR' }, ["class"]],
[/^\(\?=/, function() { return 'POS_LA_ASSERT' }, ],
[/^\(\?!/, function() { return 'NEG_LA_ASSERT' }, ],
[/^\(\?:/, function() { return 'NON_CAPTURE_GROUP' }, ],
[/^\(/, function() { return 'L_PAREN' }, ],
[/^\)/, function() { return 'R_PAREN' }, ],
[/^[*?+[^$]/, function() { return 'CHAR' }, ["class"]],
[/^\\\]/, function() { return 'ESC_CHAR' }, ["class"]],
[/^\]/, function() {  this.popState(); return 'R_BRACKET'  }, ["class"]],
[/^\^/, function() { return 'BOS' }, ],
[/^\$/, function() { return 'EOS' }, ],
[/^\*/, function() { return 'STAR' }, ],
[/^\?/, function() { return 'Q_MARK' }, ],
[/^\+/, function() { return 'PLUS' }, ],
[/^\|/, function() { return 'BAR' }, ],
[/^\./, function() { return 'ANY' }, ],
[/^\//, function() { return 'SLASH' }, ],
[/^[^*?+\[\(\)]/, function() { return 'CHAR' }, ],
[/^\[\^/, function() {  this.pushState('class'); return 'NEG_CLASS'  }, ],
[/^\[/, function() {  this.pushState('class'); return 'L_BRACKET'  }, ]];
const lexRulesByConditions = {"INITIAL":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,23,24,25,26,30,31,32,33,34,35,36,37,38,39,40],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this._toToken(this._tokensQueue.shift());
    }

    if (!this.hasMoreTokens()) {
      return EOF_TOKEN;
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this._toToken(token, yytext);
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets parsing options.
   */
  setOptions(options) {
    if (options.hasOwnProperty('captureLocations')) {
      shouldCaptureLocations = options.captureLocations;
    }
    return this;
  },

  /**
   * Parses a string.
   */
  parse(string) {
    yyparse.onParseBegin(string);

    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (shouldCaptureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        stack.push(
          {symbol: tokens[token.type], semanticValue: token.value, loc},
          Number(entry.slice(1))
        );
        shiftedToken = token;
        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && shouldCaptureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string) {},
  onParseEnd(parsed) {},
};

/**
 * Tracks capturing groups.
 */
let capturingGroupsCount = 0;

yyparse.onParseBegin = (_string) => {
  capturingGroupsCount = 0;
};

/**
 * Extracts ranges from the range string.
 */
function getRange(text) {
  return text.match(/\d+/g).map(Number);
}

/**
 * Creates a character node.
 */
function Char(value, kind, loc) {
  let symbol;

  switch (kind) {
    case 'decimal': {
      const code = parseInt(value.slice(1));
      symbol = String.fromCodePoint(code);
      break;
    }
    case 'oct': {
      const code = parseInt(value.slice(1), 8);
      symbol = String.fromCodePoint(code);
      break;
    }
    case 'hex':
    case 'unicode': {
      const hex = value.slice(2).replace('{', '');
      const code = parseInt(hex, 16);
      symbol = String.fromCodePoint(code);
      break;
    }
  }

  return Node({
    type: 'Char',
    value,
    kind,
    symbol,
  }, loc);
}

/**
 * Checks the flags are valid, and that
 * we don't duplicate flags.
 */
function checkFlags(flags) {
  const seen = new Set();
  for (const flag of flags) {
    if (seen.has(flag) || !/[gimuy]/.test(flag)) {
      throw new SyntaxError(`Invalid flags: ${flags}`);
    }
    seen.add(flag);
  }

  return flags.split('').sort().join('');
}

/**
 * Creates an AST node with a location.
 *
 * NOTE: The `shouldCaptureLocations` meta variable is defined by Syntax tool.
 */
function Node(node, loc) {
  if (shouldCaptureLocations) {
    node.loc = {
      start: loc.startOffset,
      end: loc.endOffset,
    };
  }
  return node;
}

/**
 * Creates location node.
 */
function loc(start, end) {
  if (!shouldCaptureLocations) {
    return null;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
  };
}

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;
