(function($) {

  var players = [
    {
      name: 'Spiller 1',
      id: '#player1',
      initPosX: 20,
      initPosY: 520,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'Spiller 2',
      id: '#player2',
      initPosX: 68,
      initPosY: 517,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'Spiller 3',
      id: '#player3',
      initPosX: 117,
      initPosY: 521,
      inPlay: false,
      currentField: 0,
      prevField: 0,
      wait: 0,
    },
    {
      name: 'Spiller 4',
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
      name: 'Start',
      message: '',
      posX: 262,
      posY: 85,
    },
    {
      name: '1',
      message: '',
      posX: 345,
      posY: 93,
    },
    {
      name: '2',
      message: '',
      posX: 391,
      posY: 92,
    },
    {
      name: '3',
      message: 'Du begynder at pumpe jern, og din nye krop giver respekt på gangen. Ryk to felter frem.',
      type: 'move',
      value: 2,
      posX: 461,
      posY: 72,
    },
    {
      name: '4',
      message: '',
      posX: 537,
      posY: 75,
    },
    {
      name: '5',
      message: '',
      posX: 589,
      posY: 73,
    },
    {
      name: '6',
      message: 'Du skriver en bog om uretfærdighed i systemet. Vent en omgang.',
      type: 'wait',
      value: 1,
      posX: 634,
      posY: 89,
    },
    {
      name: '7',
      message: 'Du får en fængselstatovering, som giver fornyet respekt. Ryk et felt frem.',
      type: 'move',
      value: 1,
      posX: 717,
      posY: 122,
    },
    {
      name: '8',
      message: '',
      posX: 763,
      posY: 106,
    },
    {
      name: '9',
      message: 'Du møder Ken B. Rasmussen på gårdturen, og I kommer op at slås. Ryk i isolation.',
      type: 'special',
      value: 50,
      posX: 788,
      posY: 197,
    },
    {
      name: '10',
      message: '',
      posX: 878,
      posY: 158,
    },
    {
      name: '11',
      message: 'TV2 bringer afsløringen "Danske fængsler svømmer i hash", og du hjælper fængselsinspektøren med pressehåndteringen. Ryk to felter frem.',
      type: 'move',
      value: 2,
      posX: 889,
      posY: 228,
    },
    {
      name: '12',
      message: 'Ingen af dine venner vil smugle hash med ind, når de kommer på besøg. Det skaber dårlig stemning på gangen. Ryk i frivillig isolation.',
      type: 'special',
      value: 50,
      posX: 815,
      posY: 252,
    },
    {
      name: '13',
      message: '',
      posX: 763,
      posY: 259,
    },
    {
      name: '14',
      message: '',
      posX: 722,
      posY: 270,
    },
    {
      name: '15',
      message: 'Du nægter at samle flere tøjklemmer. Ryk 2 felter tilbage.',
      type: 'move',
      value: -2,
      posX: 678,
      posY: 276,
    },
    {
      name: '16',
      message: 'Du analyserer magtforholdet mellem to fløje i fængslet men taler lidt for højt. Vent en omgang.',
      type: 'wait',
      value: 1,
      posX: 612,
      posY: 275,
    },
    {
      name: '17',
      message: 'Lars Løkke Rasmussen ringer og spørger dig til råds i en bilagssag, og du føler dig igen vigtig og værdsat. Ryk ét felt frem.',
      type: 'move',
      value: 1,
      posX: 500,
      posY: 271,
    },
    {
      name: '18',
      message: '',
      posX: 455,
      posY: 236,
    },
    {
      name: '19',
      message: 'En flink fyr ved navn Ali bruger dig som spindoktor og vinder langsomt magten på gangen. Du får det meget nemmere. Ryk tre felter frem.',
      type: 'move',
      value: 3,
      posX: 415,
      posY: 264,
    },
    {
      name: '20',
      message: 'Naser Khader udgiver en selvbiografi med et kapitel om dig. Ryk to felter tilbage.',
      type: 'move',
      value: -2,
      posX: 373,
      posY: 288,
    },
    {
      name: '21',
      message: '',
      posX: 313,
      posY: 307,
    },
    {
      name: '22',
      message: '',
      posX: 273,
      posY: 331,
    },
    {
      name: '23',
      message: 'Klaus Riskær bliver fængslet og flytter ind på din afdeling. I holder sammen og står stærkere. Ryk ét felt frem.',
      type: 'move',
      value: 1,
      posX: 283,
      posY: 376,
    },
    {
      name: '24',
      message: '',
      posX: 332,
      posY: 376,
    },
    {
      name: '25',
      message: 'Store Frank fra gangen gør dig til sin personlige hushjælp og tvinger dig til at vaske op hver dag. Vent en omgang.',
      type: 'wait',
      value: 1,
      posX: 375,
      posY: 357,
    },
    {
      name: '26',
      message: 'Du skylder Torsten fra nabogangen 100.000 kroner og forsøger at sælge ødegården for at skaffe kapital. Men din kone sætter sig imod. Ryk i frivillig isolation.',
      type: 'special',
      value: 50,
      posX: 495,
      posY: 381,
    },
    {
      name: '27',
      message: 'Store A har maddag, og du får dårlig mave. Ryk til sygeafsnittet.',
      type: 'special',
      value: 51,
      posX: 565,
      posY: 350,
    },
    {
      name: '28',
      message: '',
      posX: 611,
      posY: 355,
    },
    {
      name: '29',
      message: '',
      posX: 663,
      posY: 347,
    },
    {
      name: '30',
      message: '',
      posX: 718,
      posY: 333,
    },
    {
      name: '31',
      message: 'Du får indsmuglet en mobiltelefon, og alting bliver meget nemmere. Ryk tre felter frem.',
      type: 'move',
      value: 3,
      posX: 777,
      posY: 317,
    },
    {
      name: '32',
      message: '',
      posX: 717,
      posY: 382,
    },
    {
      name: '33',
      message: '',
      posX: 712,
      posY: 431,
    },
    {
      name: '34',
      message: '',
      posX: 668,
      posY: 447,
    },
    {
      name: '35',
      message: 'Politiken kommer forbi og laver et personligt interview om din hårde tid i fængslet. Ryk to felter frem.',
      type: 'move',
      value: 2,
      posX: 623,
      posY: 404,
    },
    {
      name: '36',
      message: 'En kvindelig beundrer har læst et interview med dig i Politiken og kommer på ’ukontrolleret besøg’. Ryk tre felter frem.',
      type: 'move',
      value: 3,
      posX: 537,
      posY: 429,
    },
    {
      name: '37',
      message: '',
      posX: 396,
      posY: 462,
    },
    {
      name: '38',
      message: '',
      posX: 363,
      posY: 436,
    },
    {
      name: '39',
      message: '',
      posX: 318,
      posY: 446,
    },
    {
      name: '40',
      message: 'En medfange gør tilnærmelser i badet. Flygt to felter frem.',
      type: 'move',
      value: 2,
      posX: 284,
      posY: 475,
    },
    {
      name: '41',
      message: '',
      posX: 330,
      posY: 525,
    },
    {
      name: '42',
      message: '',
      posX: 371,
      posY: 539,
    },
    {
      name: '43',
      message: 'Du bliver tenor i fangekoret, og det virker. Ryk to felter frem.',
      type: 'move',
      value: 2,
      posX: 411,
      posY: 504,
    },
    {
      name: '44',
      message: 'Der går betændelse i din fængselstatovering. Ryk direkte til sygeafsnittet.',
      type: 'special',
      value: 51,
      posX: 476,
      posY: 526,
    },
    {
      name: '45',
      message: '',
      posX: 551,
      posY: 543,
    },
    {
      name: '46',
      message: '',
      posX: 593,
      posY: 548,
    },
    {
      name: '47',
      message: 'Din urinprøve er ikke ren, og du kan ikke få udgang. Vent to omgange.',
      type: 'wait',
      value: 2,
      posX: 638,
      posY: 515,
    },
    {
      name: '48',
      message: '',
      posX: 678,
      posY: 493,
    },
    {
      name: 'Slut',
      message: 'Tillykke, du er ude af fængslet! Slå med terningen for at få afgjort din videre skæbne',
      posX: 731,
      posY: 487,
    },

    {
      name: 'Isolation',
      message: '',
      posX: 869,
      posY: 62,
    },
    {
      name: 'Sygeafsnit',
      message: '',
      posX: 309,
      posY: 199,
    },
    {
      name: 'Skæbne 1',
      message: 'Du bliver pressemedarbejder i Ballerup Kommune med mulighed for forfremmelse.',
      posX: 891,
      posY: 337,
    },
    {
      name: 'Skæbne 2',
      message: 'Du bliver genansat i dit gamle job som politisk kommentator på TV2 og Euroman laver et dobbeltinterview med dig og Jørgen Leth om at blive fyret og vende stærkt tilbage.',
      posX: 828,
      posY: 464,
    },
    {
      name: 'Skæbne 3',
      message: 'Du slår dig ned som coach og yogainstruktør på Lolland og hjælper kendte mennesker, som har været igennem mediemøllen, med at komme på fode igen.',
      posX: 847,
      posY: 531,
    },
  ];

  var numPlayers = 0;
  var fudgeFactor = 10;
  var currentPlayer = 0;

  $(function() {
    initGamePieces();
    initGame();
  });

  function initGamePieces() {
    $.each(players, function (index) {
      var top = players[index].initPosY;
      var left = players[index].initPosX;
      $(players[index].id).css({ top: top + 'px', left: left + 'px'});
    });

    $('#throwDice').click(function (event) {
      event.preventDefault();

      if (players[currentPlayer].wait > 0) {
        players[currentPlayer].wait--;

        currentPlayer++;
        if (currentPlayer === numPlayers) {
          currentPlayer = 0;
        }

        prepareControls();
      }
      else {
        var result = throwDice();

        // TODO: move to separate function?
        $('#dice1').attr('src', './img/dice' + result + '.png');

        var currentField = players[currentPlayer].currentField;
        var newField = currentField + result;

        if (currentField === 49) {
          var offset = Math.ceil(result / 2);
          newField = 51 + offset;
          movePlayerTo(currentPlayer, newField);
        }
        else {
          if (newField > 49) {
            movePlayerTo(currentPlayer, 49);
          }
          else {
            movePlayerTo(currentPlayer, newField);
          }
        }
      }
    });

    $('#dismiss').click(function (event) {
      event.preventDefault();

      $('#message').fadeOut(250, function () {
        $(this).hide();

        // perform additional actions

        var currentField = players[currentPlayer].currentField;
        var type = fields[currentField].type;
        var newField;

        switch (type) {
          case 'move':
            newField = currentField + fields[currentField].value;
            movePlayerTo(currentPlayer, newField);
            break;
          case 'wait':
            players[currentPlayer].wait = fields[currentField].value;

            // move control to next active player
            currentPlayer++;
            if (currentPlayer === numPlayers) {
              currentPlayer = 0;
            }

            break;
          case 'special':
            newField = fields[currentField].value;
            movePlayerTo(currentPlayer, newField);
            players[currentPlayer].prevField = fields[currentField].value;
            break;
        }

        prepareControls();
      });
    });
  }

  function initGame() {
    $('#controls').hide();
    $('#dice2').hide();
    $('#dice3').hide();
    $('#message').hide();
    $('#done').hide();
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

  function prepareControls() {
    $('#controls .playerName').text(players[currentPlayer].name);

    if (players[currentPlayer].wait > 0) {
      $('#throwDice').text('Vent en omgang');
    }
    else {
      $('#throwDice').text('Kast terningen!');
    }

    $('#throwDice').show();
  }

  function movePlayerTo(playerIndex, fieldIndex) {
    var top = fields[fieldIndex].posY;
    var left = fields[fieldIndex].posX;

    top += Math.floor(Math.random() * fudgeFactor) - fudgeFactor / 2 - 30;
    left += Math.floor(Math.random() * fudgeFactor) - fudgeFactor / 2 - 10;

    switch (players[playerIndex].prevField) {
      case 50: // solitary
        var solitaryTop = fields[players[playerIndex].currentField].posY - 30;
        var solitaryLeft = fields[players[playerIndex].currentField].posX - 10;

        players[playerIndex].prevField = 0;

        $(players[playerIndex].id).animate({ top: solitaryTop + 'px', left: solitaryLeft + 'px'}, 750, function () {
          $(players[playerIndex].id).animate({ top: top + 'px', left: left + 'px'}, 750, movePlayer(playerIndex, fieldIndex));
        });
        break;
      case 51: // infirmary
        var infirmaryTop = fields[players[playerIndex].currentField].posY - 30;
        var infirmaryLeft = fields[players[playerIndex].currentField].posX - 10;
        players[playerIndex].prevField = 0;
        $(players[playerIndex].id).animate({ top: infirmaryTop + 'px', left: infirmaryLeft + 'px'}, 750, function () {
          $(players[playerIndex].id).animate({ top: top + 'px', left: left + 'px'}, 750, movePlayer(playerIndex, fieldIndex));
        });
        break;
      default:
        $(players[playerIndex].id).animate({ top: top + 'px', left: left + 'px'}, 750, movePlayer(playerIndex, fieldIndex));
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
    if (fields[fieldIndex].message === '') {
      // TODO: do unconditional increment here and ONLY here to make logic more obvious
      currentPlayer++;

      if (currentPlayer === numPlayers) {
        currentPlayer = 0;
      }

      prepareControls();
    }
    else {
      $('#throwDice').hide();
      if (fieldIndex > 50) {
        $('#message p.done').show();
        $('#message p.dismiss').hide();
      }
      else {
        $('#message p.done').hide();
        $('#message p.dismiss').show();
      }

      $('#message').children('.message').text(fields[fieldIndex].message).parent().fadeIn(250);
    }
  }

  // Return a random number between 1 and 6 (inclusive)
  function throwDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

})(jQuery);
