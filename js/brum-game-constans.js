class BrumRacingGameeConstants {}

BrumRacingGameConstants.FPS = 120;
BrumRacingGameConstants.INTERVAL_TIMEOUT = 1000 / TetrisRacingGameConstants.FPS;
BrumRacingGameConstants.PAUSE_TIMEOUT = 1000;
BrumRacingGameConstants.BASE_LINE_HEIGHT = 120;
BrumRacingGameConstants.CAR_WIDTH_MARGIN = 72;
BrumRacingGameConstants.CAR_WIDTH_NO_MARGIN = 69;
BrumRacingGameConstants.CAR_HEIGHT_MARGIN = 96;
BrumRacingGameConstants.CAR_HEIGHT_NO_MARGIN = 93;
BrumRacingGameConstants.WALL_WIDTH_MARGIN = 24;
BrumRacingGameConstants.WALL_WIDTH_NO_MARGIN = 21;
BrumRacingGameConstants.WALL_HEIGHT_MARGIN = 96;
BrumRacingGameConstants.WALL_HEIGHT_NO_MARGIN = 93;
BrumRacingGameConstants.NUMBER_OF_LINES = 15;

BrumRacingGameConstants.OPPONENT_CAR_IMG = "opponent-car-img";
BrumRacingGameConstants.PLAYER_CAR_IMG = "player-car-img";
BrumRacingGameConstants.GAME_OVER_IMG = "game-over-img";
BrumRacingGameConstants.NEXT_LEVEL_IMG = "next-level-img";
BrumRacingGameConstants.WALL_IMG = "wall-img";
BrumRacingGameConstants.MOVE_SOUND = "move-sound";
BrumRacingGameConstants.GAME_OVER_SOUND = "game-over-sound";
BrumRacingGameConstants.NEXT_LEVEL_SOUND = "next-level-sound";

BrumRacingGameConstants.POSSIBLE_LEVEL_LINES = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 0],
];
BrumRacingGameConstants.EMPTY_LINE = [0, 0, 0];

BrumRacingGameConstants.ARROW_LEFT = "ArrowLeft";
BrumRacingGameConstants.ARROW_RIGHT = "ArrowRight";

Object.freeze(BrumRacingGameConstants);
