import 'package:flutter/material.dart';

class StartButton extends StatelessWidget {
  final String text;
  final Color color;
  final Color backgroundColor;
  final VoidCallback onClicked;

  //This is the constructor
  const StartButton({
    Key? key,
    required this.text,
    this.color = Colors.white,
    this.backgroundColor = Colors.black,
    required this.onClicked,
  }) : super(key: key);

  @override 
  Widget build(BuildContext context) => ElevatedButton(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16)
    ),
    onPressed: onClicked,
    child: Text(
      text,
      style: TextStyle(fontSize: 20, color: color),
    ),
  );
}