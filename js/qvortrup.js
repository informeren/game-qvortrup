(function($) {

  var players = [
    {
      name: 'U3BpbGxlciAx',
      id: '#player1',
      initPosX: 20,
      initPosY: 520,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'U3BpbGxlciAy',
      id: '#player2',
      initPosX: 68,
      initPosY: 517,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'U3BpbGxlciAz',
      id: '#player3',
      initPosX: 117,
      initPosY: 521,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'U3BpbGxlciA0',
      id: '#player4',
      initPosX: 162,
      initPosY: 520,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
  ];

  var fields = [
    {
      // Start
      posX: 262,
      posY: 85,
    },
    {
      // 1
      posX: 345,
      posY: 93,
    },
    {
      // 2
      posX: 391,
      posY: 92,
    },
    {
      // 3: Du begynder at pumpe jern, og din nye krop giver respekt på gangen. Ryk to felter frem.
      message: 'RHUgYmVneW5kZXIgYXQgcHVtcGUgamVybiwgb2cgZGluIG55ZSBrcm9wIGdpdmVyIHJlc3Bla3QgcOUgZ2FuZ2VuLiBSeWsgdG8gZmVsdGVyIGZyZW0u',
      type: 'move',
      value: 2,
      posX: 461,
      posY: 72,
    },
    {
      // 4
      posX: 537,
      posY: 75,
    },
    {
      // 5
      posX: 589,
      posY: 73,
    },
    {
      // 6: Du skriver en bog om uretfærdighed i systemet. Vent en omgang.
      message: 'RHUgc2tyaXZlciBlbiBib2cgb20gdXJldGbmcmRpZ2hlZCBpIHN5c3RlbWV0LiBWZW50IGVuIG9tZ2FuZy4=',
      type: 'wait',
      value: 1,
      posX: 634,
      posY: 89,
    },
    {
      // 7: Du får en fængselstatovering, som giver fornyet respekt. Ryk et felt frem.
      message: 'RHUgZuVyIGVuIGbmbmdzZWxzdGF0b3ZlcmluZywgc29tIGdpdmVyIGZvcm55ZXQgcmVzcGVrdC4gUnlrIGV0IGZlbHQgZnJlbS4=',
      type: 'move',
      value: 1,
      posX: 717,
      posY: 122,
    },
    {
      // 8
      posX: 763,
      posY: 106,
    },
    {
      // 9: Du møder Ken B. Rasmussen på gårdturen, og I kommer op at slås. Ryk i isolation.
      message: 'RHUgbfhkZXIgS2VuIEIuIFJhc211c3NlbiBw5SBn5XJkdHVyZW4sIG9nIEkga29tbWVyIG9wIGF0IHNs5XMuIFJ5ayBpIGlzb2xhdGlvbi4=',
      type: 'special',
      value: 50,
      posX: 788,
      posY: 197,
    },
    {
      // 10
      posX: 878,
      posY: 158,
    },
    {
      // 11: TV2 bringer afsløringen "Danske fængsler svømmer i hash", og du hjælper fængselsinspektøren med pressehåndteringen. Ryk to felter frem.
      message: 'VFYyIGJyaW5nZXIgYWZzbPhyaW5nZW4gIkRhbnNrZSBm5m5nc2xlciBzdvhtbWVyIGkgaGFzaCIsIG9nIGR1IGhq5mxwZXIgZuZuZ3NlbHNpbnNwZWt0+HJlbiBtZWQgcHJlc3NlaOVuZHRlcmluZ2VuLiBSeWsgdG8gZmVsdGVyIGZyZW0u',
      type: 'move',
      value: 2,
      posX: 889,
      posY: 228,
    },
    {
      // 12: Ingen af dine venner vil smugle hash med ind, når de kommer på besøg. Det skaber dårlig stemning på gangen. Ryk i frivillig isolation.
      message: 'SW5nZW4gYWYgZGluZSB2ZW5uZXIgdmlsIHNtdWdsZSBoYXNoIG1lZCBpbmQsIG7lciBkZSBrb21tZXIgcOUgYmVz+GcuIERldCBza2FiZXIgZOVybGlnIHN0ZW1uaW5nIHDlIGdhbmdlbi4gUnlrIGkgZnJpdmlsbGlnIGlzb2xhdGlvbi4=',
      type: 'special',
      value: 50,
      posX: 815,
      posY: 252,
    },
    {
      // 13
      posX: 763,
      posY: 259,
    },
    {
      // 14
      posX: 722,
      posY: 270,
    },
    {
      // 15: Du nægter at samle flere tøjklemmer. Ryk 2 felter tilbage.
      message: 'RHUgbuZndGVyIGF0IHNhbWxlIGZsZXJlIHT4amtsZW1tZXIuIFJ5ayAyIGZlbHRlciB0aWxiYWdlLg==',
      type: 'move',
      value: -2,
      posX: 678,
      posY: 276,
    },
    {
      // 16: Du analyserer magtforholdet mellem to fløje i fængslet men taler lidt for højt. Vent en omgang.
      message: 'RHUgYW5hbHlzZXJlciBtYWd0Zm9yaG9sZGV0IG1lbGxlbSB0byBmbPhqZSBpIGbmbmdzbGV0IG1lbiB0YWxlciBsaWR0IGZvciBo+Gp0LiBWZW50IGVuIG9tZ2FuZy4=',
      type: 'wait',
      value: 1,
      posX: 612,
      posY: 275,
    },
    {
      // 17: Lars Løkke Rasmussen ringer og spørger dig til råds i en bilagssag, og du føler dig igen vigtig og værdsat. Ryk ét felt frem.
      message: 'TGFycyBM+GtrZSBSYXNtdXNzZW4gcmluZ2VyIG9nIHNw+HJnZXIgZGlnIHRpbCBy5WRzIGkgZW4gYmlsYWdzc2FnLCBvZyBkdSBm+GxlciBkaWcgaWdlbiB2aWd0aWcgb2cgduZyZHNhdC4gUnlrIOl0IGZlbHQgZnJlbS4=',
      type: 'move',
      value: 1,
      posX: 500,
      posY: 271,
    },
    {
      // 18
      posX: 455,
      posY: 236,
    },
    {
      // 19: En flink fyr ved navn Ali bruger dig som spindoktor og vinder langsomt magten på gangen. Du får det meget nemmere. Ryk tre felter frem.
      message: 'RW4gZmxpbmsgZnlyIHZlZCBuYXZuIEFsaSBicnVnZXIgZGlnIHNvbSBzcGluZG9rdG9yIG9nIHZpbmRlciBsYW5nc29tdCBtYWd0ZW4gcOUgZ2FuZ2VuLiBEdSBm5XIgZGV0IG1lZ2V0IG5lbW1lcmUuIFJ5ayB0cmUgZmVsdGVyIGZyZW0u',
      type: 'move',
      value: 3,
      posX: 415,
      posY: 264,
    },
    {
      // 20: Naser Khader udgiver en selvbiografi med et kapitel om dig. Ryk to felter tilbage.
      message: 'TmFzZXIgS2hhZGVyIHVkZ2l2ZXIgZW4gc2VsdmJpb2dyYWZpIG1lZCBldCBrYXBpdGVsIG9tIGRpZy4gUnlrIHRvIGZlbHRlciB0aWxiYWdlLg==',
      type: 'move',
      value: -2,
      posX: 373,
      posY: 288,
    },
    {
      // 21
      posX: 313,
      posY: 307,
    },
    {
      // 22
      posX: 273,
      posY: 331,
    },
    {
      // 23: Klaus Riskær bliver fængslet og flytter ind på din afdeling. I holder sammen og står stærkere. Ryk ét felt frem.
      message: 'S2xhdXMgUmlza+ZyIGJsaXZlciBm5m5nc2xldCBvZyBmbHl0dGVyIGluZCBw5SBkaW4gYWZkZWxpbmcuIEkgaG9sZGVyIHNhbW1lbiBvZyBzdOVyIHN05nJrZXJlLiBSeWsg6XQgZmVsdCBmcmVtLg==',
      type: 'move',
      value: 1,
      posX: 283,
      posY: 376,
    },
    {
      // 24
      posX: 332,
      posY: 376,
    },
    {
      // 25: Store Frank fra gangen gør dig til sin personlige hushjælp og tvinger dig til at vaske op hver dag. Vent en omgang.
      message: 'U3RvcmUgRnJhbmsgZnJhIGdhbmdlbiBn+HIgZGlnIHRpbCBzaW4gcGVyc29ubGlnZSBodXNoauZscCBvZyB0dmluZ2VyIGRpZyB0aWwgYXQgdmFza2Ugb3AgaHZlciBkYWcuIFZlbnQgZW4gb21nYW5nLg==',
      type: 'wait',
      value: 1,
      posX: 375,
      posY: 357,
    },
    {
      // 26: Du skylder Torsten fra nabogangen 100.000 kroner og forsøger at sælge ødegården for at skaffe kapital. Men din kone sætter sig imod. Ryk i frivillig isolation.
      message: 'RHUgc2t5bGRlciBUb3JzdGVuIGZyYSBuYWJvZ2FuZ2VuIDEwMC4wMDAga3JvbmVyIG9nIGZvcnP4Z2VyIGF0IHPmbGdlIPhkZWflcmRlbiBmb3IgYXQgc2thZmZlIGthcGl0YWwuIE1lbiBkaW4ga29uZSBz5nR0ZXIgc2lnIGltb2QuIFJ5ayBpIGZyaXZpbGxpZyBpc29sYXRpb24u',
      type: 'special',
      value: 50,
      posX: 495,
      posY: 381,
    },
    {
      // 27: Store A har maddag, og du får dårlig mave. Ryk til sygeafsnittet.
      message: 'U3RvcmUgQSBoYXIgbWFkZGFnLCBvZyBkdSBm5XIgZOVybGlnIG1hdmUuIFJ5ayB0aWwgc3lnZWFmc25pdHRldC4=',
      type: 'special',
      value: 51,
      posX: 565,
      posY: 350,
    },
    {
      // 28
      posX: 611,
      posY: 355,
    },
    {
      // 29
      posX: 663,
      posY: 347,
    },
    {
      // 30
      posX: 718,
      posY: 333,
    },
    {
      // 31: Du får indsmuglet en mobiltelefon, og alting bliver meget nemmere. Ryk tre felter frem.
      message: 'RHUgZuVyIGluZHNtdWdsZXQgZW4gbW9iaWx0ZWxlZm9uLCBvZyBhbHRpbmcgYmxpdmVyIG1lZ2V0IG5lbW1lcmUuIFJ5ayB0cmUgZmVsdGVyIGZyZW0u',
      type: 'move',
      value: 3,
      posX: 777,
      posY: 317,
    },
    {
      // 32
      posX: 717,
      posY: 382,
    },
    {
      // 33
      posX: 712,
      posY: 431,
    },
    {
      // 34
      posX: 668,
      posY: 447,
    },
    {
      // 35: Politiken kommer forbi og laver et personligt interview om din hårde tid i fængslet. Ryk to felter frem.
      message: 'UG9saXRpa2VuIGtvbW1lciBmb3JiaSBvZyBsYXZlciBldCBwZXJzb25saWd0IGludGVydmlldyBvbSBkaW4gaOVyZGUgdGlkIGkgZuZuZ3NsZXQuIFJ5ayB0byBmZWx0ZXIgZnJlbS4=',
      type: 'move',
      value: 2,
      posX: 623,
      posY: 404,
    },
    {
      // 36: En kvindelig beundrer har læst et interview med dig i Politiken og kommer på ’ukontrolleret besøg’. Ryk tre felter frem.
      message: 'RW4ga3ZpbmRlbGlnIGJldW5kcmVyIGhhciBs5nN0IGV0IGludGVydmlldyBtZWQgZGlnIGkgUG9saXRpa2VuIG9nIGtvbW1lciBw5SAmcnNxdW87dWtvbnRyb2xsZXJldCBiZXP4ZyZyc3F1bzsuIFJ5ayB0cmUgZmVsdGVyIGZyZW0u',
      type: 'move',
      value: 3,
      posX: 537,
      posY: 429,
    },
    {
      // 37
      posX: 396,
      posY: 462,
    },
    {
      // 38
      posX: 363,
      posY: 436,
    },
    {
      // 39
      posX: 318,
      posY: 446,
    },
    {
      // 40: En medfange gør tilnærmelser i badet. Flygt to felter frem.
      message: 'RW4gbWVkZmFuZ2UgZ/hyIHRpbG7mcm1lbHNlciBpIGJhZGV0LiBGbHlndCB0byBmZWx0ZXIgZnJlbS4=',
      type: 'move',
      value: 2,
      posX: 284,
      posY: 475,
    },
    {
      // 41
      posX: 330,
      posY: 525,
    },
    {
      // 42
      posX: 371,
      posY: 539,
    },
    {
      // 43: Du bliver tenor i fangekoret, og det virker. Ryk to felter frem.
      message: 'RHUgYmxpdmVyIHRlbm9yIGkgZmFuZ2Vrb3JldCwgb2cgZGV0IHZpcmtlci4gUnlrIHRvIGZlbHRlciBmcmVtLg==',
      type: 'move',
      value: 2,
      posX: 411,
      posY: 504,
    },
    {
      // 44: Der går betændelse i din fængselstatovering. Ryk direkte til sygeafsnittet.
      message: 'RGVyIGflciBiZXTmbmRlbHNlIGkgZGluIGbmbmdzZWxzdGF0b3ZlcmluZy4gUnlrIGRpcmVrdGUgdGlsIHN5Z2VhZnNuaXR0ZXQu',
      type: 'special',
      value: 51,
      posX: 476,
      posY: 526,
    },
    {
      // 45
      posX: 551,
      posY: 543,
    },
    {
      // 46
      posX: 593,
      posY: 548,
    },
    {
      // 47: Din urinprøve er ikke ren, og du kan ikke få udgang. Vent to omgange.
      message: 'RGluIHVyaW5wcvh2ZSBlciBpa2tlIHJlbiwgb2cgZHUga2FuIGlra2UgZuUgdWRnYW5nLiBWZW50IHRvIG9tZ2FuZ2Uu',
      type: 'wait',
      value: 2,
      posX: 638,
      posY: 515,
    },
    {
      // 48
      posX: 678,
      posY: 493,
    },
    {
      // End: Tillykke, du er ude af fængslet! Slå med terningen for at få afgjort din videre skæbne.
      message: 'VGlsbHlra2UsIGR1IGVyIHVkZSBhZiBm5m5nc2xldCEgU2zlIG1lZCB0ZXJuaW5nZW4gZm9yIGF0IGblIGFmZ2pvcnQgZGluIHZpZGVyZSBza+ZibmUu',
      posX: 731,
      posY: 487,
    },

    {
      // 50
      posX: 869,
      posY: 62,
    },
    {
      // 51
      posX: 309,
      posY: 199,
    },
    {
      // 52: Du bliver pressemedarbejder i Ballerup Kommune med mulighed for forfremmelse.
      message: 'RHUgYmxpdmVyIHByZXNzZW1lZGFyYmVqZGVyIGkgQmFsbGVydXAgS29tbXVuZSBtZWQgbXVsaWdoZWQgZm9yIGZvcmZyZW1tZWxzZS4=',
      posX: 891,
      posY: 337,
    },
    {
      // 53: Du bliver genansat i dit gamle job som politisk kommentator på TV2 og Euroman laver et dobbeltinterview med dig og Jørgen Leth om at blive fyret og vende stærkt tilbage.
      message: 'RHUgYmxpdmVyIGdlbmFuc2F0IGkgZGl0IGdhbWxlIGpvYiBzb20gcG9saXRpc2sga29tbWVudGF0b3IgcOUgVFYyIG9nIEV1cm9tYW4gbGF2ZXIgZXQgZG9iYmVsdGludGVydmlldyBtZWQgZGlnIG9nIEr4cmdlbiBMZXRoIG9tIGF0IGJsaXZlIGZ5cmV0IG9nIHZlbmRlIHN05nJrdCB0aWxiYWdlLg==',
      posX: 828,
      posY: 464,
    },
    {
      // 54: Du slår dig ned som coach og yogainstruktør på Lolland og hjælper kendte mennesker, som har været igennem mediemøllen, med at komme på fode igen.
      message: 'RHUgc2zlciBkaWcgbmVkIHNvbSBjb2FjaCBvZyB5b2dhaW5zdHJ1a3T4ciBw5SBMb2xsYW5kIG9nIGhq5mxwZXIga2VuZHRlIG1lbm5lc2tlciwgc29tIGhhciB25nJldCBpZ2VubmVtIG1lZGllbfhsbGVuLCBtZWQgYXQga29tbWUgcOUgZm9kZSBpZ2VuLg==',
      posX: 847,
      posY: 531,
    },
  ];

  // The number of people playing the game.
  var numPlayers = 0;

  // The max amount of pixels to offset pieces on a field to avoid overlap.
  var fudgeFactor = 10;

  // Keeps track of whose turn it is.
  var currentPlayer = 0;

  // Inititalize the game.
  $(function() {
    initGamePieces();
    initClickHandlers();
    initGame();
  });

  // Move the player pieces to their starting position.
  function initGamePieces() {
    $.each(players, function (index) {
      var top = players[index].initPosY;
      var left = players[index].initPosX;
      $(players[index].id).css({ top: top + 'px', left: left + 'px'});
    });
  }

  // Add click handlers for throwing the dice and dismissing messages.
  function initClickHandlers() {
    $('#throwDice').click(function (event) {
      event.preventDefault();
      $(this).hide();

      var result;

      // This is a normal turn, throw the dice and move the player.
      if (players[currentPlayer].wait === 0) {
        result = throwDice();
        updateDice(result);

        var currentField = players[currentPlayer].currentField;
        var newField = currentField + result;

        if (currentField === 49) {
          // From the goal we can move to one of three fields at the end of the
          // fields array.
          var offset = Math.ceil(result / 2);
          newField = 51 + offset;
          movePlayerTo(currentPlayer, newField);
        }
        else {
          // If the player overshoots the goal, just move her there, otherwise
          // do a normal move.
          if (newField > 49) {
            movePlayerTo(currentPlayer, 49);
          }
          else {
            movePlayerTo(currentPlayer, newField);
          }
        }
      }
      else {
        // The player has to miss one or more turns.
        if (players[currentPlayer].wait > 0) {
          players[currentPlayer].wait--;
          nextPlayer();
          prepareControls();
        }
        // The player is in solitary cofinement.
        if (players[currentPlayer].wait < 0) {
          result = throwDice();
          updateDice(result);

          // The player must roll 5 or 6 to get out.
          if (result > 4) {
            players[currentPlayer].wait = 0;
            var posX = fields[players[currentPlayer].currentField].posX - 10;
            var posY = fields[players[currentPlayer].currentField].posY - 30;
            $(players[currentPlayer].id).animate({ top: posY + 'px', left: posX + 'px'}, 750);
          }

          nextPlayer();
          prepareControls();
        }
      }
    });

    $('#dismiss').click(function (event) {
      event.preventDefault();

      $('#message').fadeOut(250, function () {
        $(this).hide();

        var currentField = players[currentPlayer].currentField;
        var type = fields[currentField].type;
        var newField;

        // Perform an action based on the event type.
        switch (type) {
          case 'move':
            newField = currentField + fields[currentField].value;
            movePlayerTo(currentPlayer, newField);
            break;
          case 'wait':
            players[currentPlayer].wait = fields[currentField].value;
            nextPlayer();
            break;
          case 'special':
            newField = fields[currentField].value;
            if (newField === 50) {
              players[currentPlayer].wait = -1;
            }
            movePlayerTo(currentPlayer, newField);
            players[currentPlayer].prevField = fields[currentField].value;
            break;
        }

        prepareControls();
      });
    });

    $('#buttonStart').click(function (event) {
      event.preventDefault();

      $('#instructions').fadeOut(250, function () {
        $(this).hide();
        $('#controls').fadeIn(250);
        prepareControls();
      });

      numPlayers = parseInt($('input[name=players]:checked').val());
      $.each(players, function (index) {
        if (index < numPlayers) {
          players[index].inPlay = true;
        }
        else {
          $(players[index].id).fadeOut(250, function () {
            $(this).hide();
          });
        }
      });

      $.each(players, function (index) {
        movePlayerTo(index, 0);
      });
    });
  }

  function initGame() {
    $('#controls').hide();
    $('#message').hide();
    $('#done').hide();
  }

  // Resets the controls at the beginning of a new turn.
  function prepareControls() {
    $('#controls .playerName').text(atob(players[currentPlayer].name));

    if (players[currentPlayer].wait > 0) {
      switch (players[currentPlayer].wait) {
        case 1:
          $('#throwDice').text('Vent en omgang');
          break;
        case 2:
          $('#throwDice').text('Vent to omgange');
          break;
      }
    }
    else {
      $('#throwDice').text('Kast terningen!');
    }

    $('#throwDice').show();
  }

  function movePlayerTo(playerIndex, fieldIndex) {
    var top = fields[fieldIndex].posY;
    var left = fields[fieldIndex].posX;

    var player = players[playerIndex];

    top += Math.floor(Math.random() * fudgeFactor) - fudgeFactor / 2 - 30;
    left += Math.floor(Math.random() * fudgeFactor) - fudgeFactor / 2 - 10;

    if (player.prevField === 51) {
      var specialTop = fields[player.currentField].posY - 30;
      var specialLeft = fields[player.currentField].posX - 10;

      players[playerIndex].prevField = 0;

      $(players[playerIndex].id).animate({ top: specialTop + 'px', left: specialLeft + 'px'}, 750, function () {
        $(players[playerIndex].id).animate({ top: top + 'px', left: left + 'px'}, 750, function () {
          movePlayer(playerIndex, fieldIndex);
        });
      });
    }
    else {
      $(players[playerIndex].id).animate({ top: top + 'px', left: left + 'px'}, 750, function () {
        movePlayer(playerIndex, fieldIndex);
      });
    }

    // Only update player position if the player is not on a special field
    if (fieldIndex < 50) {
      players[playerIndex].currentField = fieldIndex;
    }
    if (fieldIndex === 51) {
      players[playerIndex].currentField = 21;
    }
  }

  function movePlayer(playerIndex, fieldIndex) {
    if ('message' in fields[fieldIndex]) {
      if (fieldIndex > 50) {
        $('#message p.done').show();
        $('#message p.dismiss').hide();
      }
      else {
        $('#message p.done').hide();
        $('#message p.dismiss').show();
      }

      $('#message').children('.message').text(atob(fields[fieldIndex].message)).parent().fadeIn(250);
    }
    else {
      if (fieldIndex !== 49) {
        nextPlayer();
      }
      prepareControls();
    }
  }

  // Let the next player have his turn.
  function nextPlayer() {
    currentPlayer++;
    if (currentPlayer === numPlayers) {
      currentPlayer = 0;
    }
  }

  // Return a random number between 1 and 6 (inclusive)
  function throwDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Update a specific dice graphic.
  function updateDice(value) {
    $('#dice1').attr('src', './img/dice' + value + '.png').show();
  }

})(jQuery);
