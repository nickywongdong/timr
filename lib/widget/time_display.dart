import 'package:flutter/material.dart';
import 'package:timr/models.dart';

class TimeDisplay extends StatelessWidget {
  Color color;
  Color backgroundColor;
  TimerSettings timerSettings;

    TimeDisplay({
    super.key,
    this.color = Colors.white,
    this.backgroundColor = Colors.black,
    required this.timerSettings
  });

  @override 
  Widget build(BuildContext context) {
  return SizedBox(
    width: 200,
    height: 200,
    child: Stack(
    fit: StackFit.expand,
    children: [
      CircularProgressIndicator(
        value: timerSettings.getTimeRemainingPercentage(),
        valueColor: AlwaysStoppedAnimation(Colors.white),
        backgroundColor: Colors.greenAccent,
        strokeWidth: 12,
      ),
      Center(child: buildTimr())
    ])
  );
}

  Widget buildTimr() {
    int seconds = timerSettings.getRemainingTime();
    return Text(
      '$seconds',
      style: const TextStyle(
        fontWeight: FontWeight.bold,
        color: Colors.white,
        fontSize: 80
      )
    );
  }
}