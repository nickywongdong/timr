import 'dart:async';
import 'package:flutter/foundation.dart';
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
  bool _isTimerActive = false;
  bool _isTimerPaused = false;
  //sound

  TimerSettings({
    required this.onTickChanged,
    this.setCount = 1,
    this.currentSetCount = 1,
    this.repDuration = defaultRepDuration,
    this.restDuration = const Duration(seconds: 3),
    this.totalTimeElapsed = const Duration(seconds: 0),
    this.timeRemaining = defaultRepDuration,
    this.isRepCycle = true,
  });

  Duration getRepDuration() {
    return repDuration;
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
        _isTimerActive = false;
      } else {
        timeRemaining = repDuration - tickIncrement;
      }
    }
    isRepCycle = !isRepCycle;
  }

  void tick(Timer timer) {
    // print(timeRemaining);
    timeRemaining -= tickIncrement;
    if (timeRemaining < const Duration(milliseconds: 0)) {
      alternateTimeRemaining(timer);
    }
    onTickChanged();
  }

  void startWorkout() {
    _isTimerActive = true;
    if (totalTimeElapsed == getTotalWorkoutTime()) {
      totalTimeElapsed = const Duration(seconds: 0);
    }
    timeRemaining = repDuration;
    currentSetCount = setCount;
    isRepCycle = true;
    timer?.cancel();
    timer = Timer.periodic(tickIncrement, tick);
  }

  void stopWorkout() {
    _isTimerActive = false;
    timeRemaining = repDuration;
    currentSetCount = setCount;
    isRepCycle = true;
    onTickChanged();
    timer?.cancel();
  }

  Duration getTotalWorkoutTime() {
    return (repDuration + restDuration) * setCount;
  }

  bool isTimerActive() {
    return _isTimerActive;
  }

  bool getIsRepCycle() {
    return isRepCycle;
  }

  void setRepDuration(Duration newDuration) {
    repDuration = newDuration;
    setRemainingTime(newDuration);
    onTickChanged();
  }

  void setSetCount(int count) {
    setCount = count;
    currentSetCount = count;
    //TODO: Do we need this here?
    setRemainingTime(getRepDuration());
    onTickChanged();
  }

  int getSetCount() {
    return setCount;
  }

  void pauseWorkout() {
    timer?.cancel();
    _isTimerPaused = true;
    onTickChanged();
  }

  void resumeWorkout() {
    _isTimerPaused = false;
    timer = Timer.periodic(tickIncrement, tick);
  }

  bool isTimerPaused() {
    return _isTimerPaused;
  }
}
