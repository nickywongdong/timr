import 'package:flutter/material.dart';

class PauseButton extends StatelessWidget {
  final VoidCallback pauseWorkout;
  static const text = 'Pause';
  static const color = Colors.black;
  static const backgroundColor = Colors.white;

  //This is the constructor
  PauseButton({
    super.key,
    required this.pauseWorkout,
  });

  @override 
  Widget build(BuildContext context) => ElevatedButton(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16)
    ),
    onPressed: pauseWorkout,
    child: const Text(
      text,
      style: TextStyle(fontSize: 20, color: color),
    ),
  );
} 