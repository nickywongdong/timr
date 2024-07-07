import 'package:flutter/material.dart';
import 'package:timr/widgets/start_stop_button.dart';
import 'package:timr/widgets/pause_resume_button.dart';
import 'package:timr/widgets/rep_time_picker.dart';
import 'package:timr/widgets/rest_time_picker.dart';
import 'package:timr/widgets/set_picker.dart';
import 'package:timr/models.dart';

class ConfigPanel extends StatefulWidget {
  final TimerSettings timerSettings;

  const ConfigPanel({
    Key? key,
    required this.timerSettings,
  }) : super(key: key);

  @override
  ConfigPanelState createState() => ConfigPanelState();
}

class ConfigPanelState extends State<ConfigPanel> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        StartStopButton(
          startWorkout: () => widget.timerSettings.startWorkout(),
          stopWorkout: () => widget.timerSettings.stopWorkout(),
          isTimerActive: widget.timerSettings.isTimerActive(),
        ),
        PauseResumeButton(
          pauseWorkout: () => widget.timerSettings.pauseWorkout(),
          resumeWorkout: () => widget.timerSettings.resumeWorkout(),
          isTimerPaused: widget.timerSettings.isTimerPaused(),
          isTimerActive: widget.timerSettings.isTimerActive(),
        ),
        //Should these pickers be disabled while timer is active?

        RepTimePicker(
          context: context,
          repDuration: widget.timerSettings.getRepDuration(),
          setRepDuration: (Duration newDuration) =>
              widget.timerSettings.setRepDuration(newDuration),
        ),
        RestTimePicker(
            context: context,
            restDuration: widget.timerSettings.getRestDuration(),
            setRestDuration: (Duration newDuration) =>
                widget.timerSettings.setRestDuration(newDuration)),
        SetPicker(
          context: context,
          setCount: widget.timerSettings.getSetCount(),
          setSetCount: (int value) => widget.timerSettings.setSetCount(value),
        ),
      ],
    );
  }
}
