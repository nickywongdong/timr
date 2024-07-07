import 'package:flutter/material.dart';

class PauseResumeButton extends StatelessWidget {
  static const pauseText = 'Pause';
  static const resumeText = 'Resume';

  final VoidCallback pauseWorkout;
  final VoidCallback resumeWorkout;
  final bool isTimerPaused;
  final bool isTimerActive;

  const PauseResumeButton(
      {Key? key,
      required this.pauseWorkout,
      required this.resumeWorkout,
      required this.isTimerPaused,
      required this.isTimerActive})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    String buttonText = isTimerPaused ? resumeText : pauseText;

    return Visibility(
      visible: isTimerActive, // Only show the button if the timer is active
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
        ),
        onPressed: () {
          isTimerPaused ? resumeWorkout() : pauseWorkout();
        },
        child: Text(
          buttonText,
          style: const TextStyle(fontSize: 20, color: Colors.black),
        ),
      ),
    );
  }
}
