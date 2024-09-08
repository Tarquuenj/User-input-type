# file_handling_assignment.py

def create_and_write_file(filename):
    try:
        # Create and open the file in write mode
        with open(filename, 'w') as file:
            # Write three lines of text, including strings and numbers
            file.write("This is the first line with text.\n")
            file.write("Here is the second line with number 42.\n")
            file.write("Finally, the third line has number 3.14.\n")
    except (FileNotFoundError, PermissionError) as e:
        print(f"Error while creating or writing to the file: {e}")
    finally:
        print("File creation and writing attempt completed.")

def read_and_display_file(filename):
    try:
        # Open the file in read mode
        with open(filename, 'r') as file:
            # Read and display the contents
            contents = file.read()
            print("File contents:\n", contents)
    except FileNotFoundError:
        print("The file does not exist.")
    except PermissionError:
        print("Permission denied to read the file.")
    finally:
        print("File reading attempt completed.")

def append_to_file(filename):
    try:
        # Open the file in append mode
        with open(filename, 'a') as file:
            # Append three additional lines of text
            file.write("Appending the fourth line with number 7.\n")
            file.write("Appending the fifth line with text.\n")
            file.write("And appending the sixth line with number 9.99.\n")
    except (FileNotFoundError, PermissionError) as e:
        print(f"Error while appending to the file: {e}")
    finally:
        print("File appending attempt completed.")

# Define the filename
filename = "my_file.txt"

# Create and write to the file
create_and_write_file(filename)

# Read and display the file contents
read_and_display_file(filename)

# Append additional lines to the file
append_to_file(filename)

# Read and display the file contents again to show the appended lines
read_and_display_file(filename)
