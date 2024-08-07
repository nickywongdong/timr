
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

var _setPickerList = List<int>.generate(100, (i) => i + 1);

class SetPicker extends StatelessWidget {
  final void Function(int) setSetCount;
  int setCount;
  static const color = Colors.black;
  static const backgroundColor = Colors.white;
  BuildContext context;

  //This is the constructor
  SetPicker({
    super.key,
    required this.context,
    required this.setCount,
    required this.setSetCount
  });

  void _showDialog(Widget child) {
    showCupertinoModalPopup<void>(
      context: context,
      builder: (BuildContext context) => Container(
        height: 216,
        padding: const EdgeInsets.only(top: 6.0),
        margin: EdgeInsets.only(
          bottom: MediaQuery.of(context).viewInsets.bottom,
        ),
        color: CupertinoColors.systemBackground.resolveFrom(context),
        child: SafeArea(
          top: false,
          child: child,
        )
      ),
    );
  }

  @override
  Widget build(BuildContext context) => Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        _SetPickerItem(
          children: <Widget>[
            const Text(
              'Number of sets',
              style: TextStyle(
                fontSize: 22.0,
                color: Colors.white
              )
            ),
            CupertinoButton(
              onPressed: () => _showDialog(
                CupertinoPicker(
                  magnification: 1.22,
                  squeeze: 1.2,
                  useMagnifier: true,
                  itemExtent: 32.0,
                  scrollController: FixedExtentScrollController(initialItem: setCount - 1),
                  onSelectedItemChanged: (int selectedItem) {
                    setSetCount(selectedItem + 1);
                  },
                  children: List<Widget>.generate(_setPickerList.length, (int index) {
                    return Center(child: Text(_setPickerList[index].toString()));
                  }),
                )
              ),
              child: Text(
                '$setCount',
                style: const TextStyle(
                  fontSize: 22.0,
                  color: Colors.white
                ) ,
              ),
            )
          ]
        )
      ],
    )
  );
}

class _SetPickerItem extends StatelessWidget {
  const _SetPickerItem({required this.children});
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

//   @override 
//   Widget build(BuildContext context) => CupertinoTextField(
//     keyboardType: TextInputType.number,
//     style: TextStyle(color: Colors.white),
//     onSubmitted: (String value) {
//       setRepCount(int.parse(value));
//     }
//   );
// } 