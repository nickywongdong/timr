import 'package:flutter/material.dart';

class ResumeButton extends StatelessWidget {
  final VoidCallback resumeWorkout;
  static const text = 'Resume';
  static const color = Colors.black;
  static const backgroundColor = Colors.white;

  //This is the constructor
  ResumeButton({
    super.key,
    required this.resumeWorkout,
  });

  @override 
  Widget build(BuildContext context) => ElevatedButton(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16)
    ),
    onPressed: resumeWorkout,
    child: const Text(
      text,
      style: TextStyle(fontSize: 20, color: color),
    ),
  );
} 