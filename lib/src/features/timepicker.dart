import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

import '../settings/settings_view.dart';

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
    return Scaffold(

      appBar: AppBar(
        title: const Text('timr'),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              // Navigate to the settings page. If the user leaves and returns
              // to the app after it has been killed while running in the
              // background, the navigation stack is restored.
              Navigator.restorablePushNamed(context, SettingsView.routeName);
            },
          ),
        ],
      ),
      body: DefaultTextStyle(
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