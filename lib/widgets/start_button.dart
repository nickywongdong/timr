import 'package:flutter/material.dart';

class StartButton extends StatelessWidget {
  static const text = 'Start';
  static const color = Colors.black;
  static const backgroundColor = Colors.white;
  final VoidCallback startWorkout;

  //This is the constructor
  const StartButton({
    Key? key,
    required this.startWorkout,
  }) : super(key: key);

  @override 
  Widget build(BuildContext context) => ElevatedButton(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16)
    ),
    onPressed: startWorkout,
    child: Text(
      text,
      style: TextStyle(fontSize: 20, color: color),
    ),
  );
}