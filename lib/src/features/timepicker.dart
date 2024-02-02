import 'package:flutter/cupertino.dart';

class TimerPickerExample extends StatefulWidget {
  const TimerPickerExample({super.key});

  static const routeName = '/';

  @override
  State<TimerPickerExample> createState() => _TimerPickerExampleState();
}


class _TimerPickerExampleState extends State<TimerPickerExample> {
  Duration duration = const Duration(hours: 00, minutes: 00, seconds: 00);

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('timr'),
      ),
      child: DefaultTextStyle(
        style: TextStyle(
          color: CupertinoColors.label.resolveFrom(context),
          fontSize: 22.0,
        ),
        child: Center(
          child: CupertinoTimerPicker(
            mode: CupertinoTimerPickerMode.hms,
            initialTimerDuration: duration,
            // This is called when the user changes the timer's
            // duration.
            onTimerDurationChanged: (Duration newDuration) {
              setState(() => duration = newDuration);
            },
          ),
        ),
      ),
    );
  }
}