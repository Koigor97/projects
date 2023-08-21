KELVIN = 273.15 #This is the conversion value for kelvin (temperature scale)

def kelvin_to_celsius(value: float) -> float:
    """
    This function takes a value in the kelvin temperature unit type scale,
    convert the value to Celsius and returns the value
    :param value:
    :return Float:
    """
    return value - KELVIN

def kelvin_to_fahrenheit(value: float) -> float:
    """
    This function takes a value in the kelvin temperature unit type scale,
    convert the value to Fahrenheit and returns the value
    :param value:
    :return Float:
    """
    return 9/5 * (value - KELVIN) + 32