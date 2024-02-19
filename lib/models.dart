import 'dart:async';

class TimerSettings {
  int repCount;
  Duration repDuration;
  Duration restDuration;
  Duration? countDownTimer;
  Duration totalTimeElapsed;
  Duration timeRemaining;
  Timer? timer;
  bool isRep;
  Function onTickChanged;
  //sound

  TimerSettings({
    required this.onTickChanged,
    this.repCount = 1,
    this.repDuration = const Duration(seconds: 60),
    this.restDuration = const Duration(seconds: 10),
    this.totalTimeElapsed = const Duration(seconds: 0),
    this.timeRemaining = const Duration(seconds: 60),
    this.isRep = true,
  });

  int getRemainingTime() {
    return timeRemaining.inSeconds;
  }

  double getTimeRemainingPercentage() {
    Duration timeDuration = isRep ? repDuration : restDuration;
    Duration elapsedDuration = timeDuration - timeRemaining;
    return elapsedDuration.inSeconds / timeDuration.inSeconds;
  }

  void _tick() {
    totalTimeElapsed += const Duration(seconds: 1);
    timeRemaining -= const Duration(seconds: 1);
    onTickChanged();
  }
  
  void restTick(Timer timer) {
    if (repCount < 0) {
      pauseTimer();
    } else {
      if (timeRemaining < const Duration(seconds: 1)) {
        timer = Timer.periodic(const Duration(seconds: 1), repTick);
        isRep = true;
      } else {
        _tick();
      }
    }
  }

  void repTick(Timer timer) {
    if (repCount < 0) {
      pauseTimer();
    } else {
      if (timeRemaining < const Duration(seconds: 1)){
        repCount--;
        timer = Timer.periodic(const Duration(seconds: 1), restTick);
        timeRemaining = restDuration;
        isRep = false;
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
    isRep = true;
    repCount--;
    timer = Timer.periodic(const Duration(seconds: 1), repTick);
  }

  Duration getTotalWorkoutTime() {
    return (repDuration + restDuration) * repCount;
  }
  
  bool isTimerActive() {
    return timer?.isActive ?? false;
  }

  void pauseTimer() {
    timer?.cancel();
  }
}