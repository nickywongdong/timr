import 'dart:async';
import 'package:timr/timer_constants.dart';

class TimerSettings {
  int setCount;
  int currentSetCount;
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
    this.setCount = defaultSetCount,
    this.currentSetCount = defaultSetCount,
    this.repDuration = defaultRepDuration,
    this.restDuration = defaultRestDuration,
    this.totalTimeElapsed = const Duration(seconds: 0),
    this.timeRemaining = defaultRepDuration,
    this.isRepCycle = true,
  });

  Duration getRepDuration() {
    return repDuration;
  }

  Duration getRestDuration() {
    return restDuration;
  }

  int getRemainingTime() {
    return timeRemaining.inSeconds;
  }

  void setRemainingTime(Duration newRemainingTime) {
    timeRemaining = newRemainingTime;
  }

  double getTimeRemainingPercentage() {
    Duration timeDuration = isRepCycle ? repDuration : restDuration;
    Duration elapsedDuration = timeDuration - timeRemaining;
    if (timeDuration.inMilliseconds == 0) {
      return 0;
    }
    return elapsedDuration.inMilliseconds / timeDuration.inMilliseconds;
  }

  void alternateTimeRemaining(Timer timer) {
    if (isRepCycle) {
        timeRemaining = restDuration - tickIncrement;
    } else {
      currentSetCount -= 1;
      if (currentSetCount == 0) {
        timeRemaining = const Duration(seconds: 0);
        timer.cancel();
      } else {
        timeRemaining = repDuration - tickIncrement;
      }
    }
    isRepCycle = !isRepCycle;
  }

  void tick(Timer timer) {
    timeRemaining -= tickIncrement;
    if (timeRemaining < const Duration(milliseconds: 0)) {
      alternateTimeRemaining(timer);
    }  
    onTickChanged();
  }

  void startWorkout() {
    if (totalTimeElapsed == getTotalWorkoutTime()) {
      totalTimeElapsed = const Duration(seconds: 0);
    }
    timeRemaining = repDuration;
    currentSetCount = setCount;
    isRepCycle = true;
    if (!isTimerActive()) {
      timer = Timer.periodic(tickIncrement, tick);
    } 
  }

  Duration getTotalWorkoutTime() {
    return (repDuration + restDuration) * setCount;
  }
  
  bool isTimerActive() {
    return timer?.isActive ?? false;
  }

  bool getIsRepCycle() {
    return isRepCycle;
  }

  void setRepDuration(Duration newDuration) {
    repDuration = newDuration;
    if (isRepCycle) setRemainingTime(newDuration);
    onTickChanged();
  }

  void setRestDuration(Duration newDuration) {
    restDuration = newDuration;
    if (!isRepCycle) setRemainingTime(newDuration);
    onTickChanged();
  }

  void setSetCount(int count) {
    setCount = count;
    currentSetCount = count;
    onTickChanged();
  }

  int getSetCount() {
    return setCount;
  }

  void pauseWorkout() {
    timer?.cancel();
  }

  void resumeWorkout() {
    if (isTimerActive()) return;
    timer = Timer.periodic(tickIncrement, tick);
  }
}