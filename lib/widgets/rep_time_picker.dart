import 'package:flutter/cupertino.dart';
import 'package:timr/models.dart';
import 'package:flutter/material.dart';


class RepTimePicker extends StatelessWidget {
  static const color = Colors.black;
  static const backgroundColor = Colors.white;
  BuildContext context;
  Duration repDuration;
  final void Function(Duration) setRepDuration;
  

  //This is the constructor
  RepTimePicker({
    super.key,
    required this.context,
    required this.repDuration,
    required this.setRepDuration
  });

  void _showDialog(Widget child) {
    showCupertinoModalPopup<void>(
      context: context,
      builder: (BuildContext context) => Container(
        height: 216,
        padding: const EdgeInsets.only(top: 6.0),
        // The bottom margin is provided to align the popup above the system
        // navigation bar.
        margin: EdgeInsets.only(
          bottom: MediaQuery.of(context).viewInsets.bottom,
        ),
        // Provide a background color for the popup.
        color: CupertinoColors.systemBackground.resolveFrom(context),
        // Use a SafeArea widget to avoid system overlaps.
        child: SafeArea(
          top: false,
          child: child,
        ),
      ),
    );
  }

  @override 
  Widget build(BuildContext context) => Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        _TimerPickerItem(
          children: <Widget>[
            const Text(
              'Timer',
              style: TextStyle(
                fontSize: 22.0,
                color: Colors.white
              )),
            CupertinoButton(
              // Display a CupertinoTimerPicker with hour/minute mode.
              onPressed: () => _showDialog(
                CupertinoTimerPicker(
                  mode: CupertinoTimerPickerMode.ms,
                  initialTimerDuration: repDuration,
                  // This is called when the user changes the timer's
                  // duration.
                  onTimerDurationChanged: (Duration newDuration) => setRepDuration(newDuration)
                ),
              ),
              // In this example, the timer's value is formatted manually.
              // You can use the intl package to format the value based on
              // the user's locale settings.
              child: Text(
                '$repDuration',
                style: const TextStyle(
                  fontSize: 22.0,
                  color: Colors.white
                ),
              ),
            ),
          ],
        ),
      ],
    ),
  );
} 

// This class simply decorates a row of widgets.
class _TimerPickerItem extends StatelessWidget {
  const _TimerPickerItem({required this.children});

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: CupertinoColors.inactiveGray,
            width: 0.0,
          ),
          bottom: BorderSide(
            color: CupertinoColors.inactiveGray,
            width: 0.0,
          ),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: children,
        ),
      ),
    );
  }
}