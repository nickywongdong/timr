import 'package:flutter/material.dart';
import 'package:timr/widgets/resume_button.dart';
import 'package:timr/widgets/start_button.dart';
import 'package:timr/models.dart';
import 'package:timr/widgets/pause_button.dart';
import 'package:timr/widgets/rep_time_picker.dart';

class ConfigPanel extends StatelessWidget {
  TimerSettings timerSettings;

  //This is the constructor
  ConfigPanel({
    super.key,
    required this.timerSettings
  });

  @override 
  Widget build(BuildContext context) => Column(
    children: [
      StartButton(
        startWorkout: () => timerSettings.startWorkout()
      ),
      PauseButton(
        pauseWorkout: () => timerSettings.pauseWorkout()
      ),
      ResumeButton(
        resumeWorkout: () => timerSettings.resumeWorkout()
      ),
      RepTimePicker(
        context: context,
        repDuration: timerSettings.repDuration,
        setRepDuration: (Duration newDuration) => timerSettings.setRepDuration(newDuration)
      ),
    ]
  );
} 