import 'dart:async';
import 'package:timr/timer_constants.dart';

class TimerSettings {
  int repCount;
  Duration repDuration;
  Duration restDuration;
  Duration? countDownTimer;
  Duration totalTimeElapsed;
  Duration timeRemaining;
  Timer? timer;
  bool isRepCycle;
  Function onTickChanged;
  //sound

  TimerSettings({
    required this.onTickChanged,
    this.repCount = 1,
    this.repDuration = defaultRepDuration,
    this.restDuration = const Duration(seconds: 10),
    this.totalTimeElapsed = const Duration(seconds: 0),
    this.timeRemaining = const Duration(seconds: 60),
    this.isRepCycle = true,
  });

  int getRemainingTime() {
    return timeRemaining.inSeconds;
  }

  void setRemainingTime(Duration newRemainingTime) {
    this.timeRemaining = newRemainingTime;
  }

  double getTimeRemainingPercentage() {
    Duration timeDuration = isRepCycle ? repDuration : restDuration;
    Duration elapsedDuration = timeDuration - timeRemaining;
    if (timeDuration.inSeconds == 0) {
      return 0;
    }
    return elapsedDuration.inSeconds / timeDuration.inSeconds;
  }

  void _tick() {
    totalTimeElapsed += const Duration(seconds: 1);
    timeRemaining -= const Duration(seconds: 1);
    onTickChanged();
  }
  
  void restTick(Timer timer) {
    if (repCount < 0) {
      pauseWorkout();
    } else {
      if (timeRemaining < const Duration(seconds: 1)) {
        timer = Timer.periodic(const Duration(seconds: 1), repTick);
        isRepCycle = true;
      } else {
        _tick();
      }
    }
  }

  void repTick(Timer timer) {
    if (repCount < 0) {
      pauseWorkout();
    } else {
      if (timeRemaining < const Duration(seconds: 1)){
        repCount--;
        timer = Timer.periodic(const Duration(seconds: 1), restTick);
        timeRemaining = restDuration;
        isRepCycle = false;
      } else {
        _tick();
      }
    }
  }
  void startWorkout() {
    if (totalTimeElapsed == getTotalWorkoutTime()) {
      totalTimeElapsed = const Duration(seconds: 0);
    }
    timeRemaining = repDuration;
    isRepCycle = true;
    repCount--;
    timer = Timer.periodic(const Duration(seconds: 1), repTick);
  }

  Duration getTotalWorkoutTime() {
    return (repDuration + restDuration) * repCount;
  }
  
  bool isTimerActive() {
    return timer?.isActive ?? false;
  }

  bool getIsRepCycle() {
    return isRepCycle;
  }

  void setRepDuration(Duration newDuration) {
    repDuration = newDuration;
    setRemainingTime(newDuration);
    onTickChanged();
  }

  void pauseWorkout() {
    timer?.cancel();
  }

  void resumeWorkout() {
    isRepCycle = getIsRepCycle();
    if (isRepCycle) {
      timer = Timer.periodic(const Duration(seconds: 1), repTick);
    } else {
      timer = Timer.periodic(const Duration(seconds: 1), restTick);
    }
  }
}