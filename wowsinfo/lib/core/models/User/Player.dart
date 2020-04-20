import 'package:wowsinfo/core/data/Preference.dart';

/// player nickname, account id and server code
class Player {
  String nickname;
  int playerId;
  int server;

  Player(this.nickname, this.playerId) {
    // Server will be automatically set
    server = Preference.shared.gameServer.index;
  }

  Player.fromJson(Map<String, dynamic> json) {
    this.nickname = json['nickname'];
    this.playerId = json['account_id'];
    // Use current server index, comment this line while testing
    this.server = json['server'];
  }

  Map<String, dynamic> toJson() {
    return {
      'nickname': nickname,
      'account_id': playerId,
      'server': server,
    };
  }
}