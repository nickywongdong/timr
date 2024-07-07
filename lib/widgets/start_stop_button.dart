import 'package:flutter/material.dart';

class StartStopButton extends StatelessWidget {
  static const stopText = 'Stop';
  static const startText = 'Start';

  final VoidCallback startWorkout;
  final VoidCallback stopWorkout;
  final bool isTimerActive;

  const StartStopButton({
    Key? key,
    required this.startWorkout,
    required this.stopWorkout,
    required this.isTimerActive,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String buttonText = isTimerActive ? stopText : startText;

    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
      ),
      onPressed: () {
        isTimerActive ? stopWorkout() : startWorkout();
      },
      child: Text(
        buttonText,
        style: const TextStyle(fontSize: 20, color: Colors.black),
      ),
    );
  }
}
