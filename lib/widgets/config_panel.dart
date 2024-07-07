import 'package:flutter/material.dart';
import 'package:timr/widgets/resume_button.dart';
import 'package:timr/widgets/start_button.dart';
import 'package:timr/models.dart';
import 'package:timr/widgets/pause_button.dart';
import 'package:timr/widgets/rep_time_picker.dart';
import 'package:timr/widgets/rest_time_picker.dart';
import 'package:timr/widgets/set_picker.dart';

// TODO: Does this need to be a StatefulWidget?
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
      //Should these pickers be disabled while timer is active?
      RepTimePicker(
        context: context,
        repDuration: timerSettings.getRepDuration(),
        setRepDuration: (Duration newDuration) => timerSettings.setRepDuration(newDuration)
      ),
      RestTimePicker(
        context: context,
        restDuration: timerSettings.getRestDuration(),
        setRestDuration: (Duration newDuration) => timerSettings.setRestDuration(newDuration)
      ),
      SetPicker(
        context: context,
        setCount: timerSettings.getSetCount(),
        setSetCount: (int value) => timerSettings.setSetCount(value)
      )
    ]
  );
} 