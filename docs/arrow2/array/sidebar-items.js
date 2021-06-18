initSidebarItems({"fn":[["clone","Clones a dynamic [`Array`]."],["get_display",""],["new_empty_array","Creates a new [`Array`] with a [`Array::len`] of 0."],["new_null_array","Creates a new [`Array`] of [`DataType`] `data_type` and `length`. The array is guaranteed to have [`Array::null_count`] equal to [`Array::len`]."]],"mod":[["growable","Contains the trait [`Growable`] and corresponding concreate implementations, one per concrete array, that offer the ability to create a new [`Array`] out of slices of existing [`Array`]s."],["ord","Contains functions and function factories to order values within arrays."]],"struct":[["BinaryArray",""],["BinaryPrimitive","auxiliary struct used to create a [`BinaryArray`] out of an iterator"],["BooleanArray","A [`BooleanArray`] is arrow’s equivalent to `Vec<Option<bool>>`, i.e. an array designed for highly performant operations on optionally nullable booleans. The size of this struct is `O(1)` as all data is stored behind an `Arc`."],["BooleanPrimitive","Auxiliary struct used to create a [`BooleanArray`] incrementally. Contrarily to `BooleanArray` constructors, this struct supports incrementing itself by single (optional) elements. The tradeoff is that this struct is not clonable nor `Send + Sync`."],["DictionaryArray","An [`Array`] whose values are encoded by keys. This [`Array`] is useful when the cardinality of values is low compared to the length of the [`Array`]."],["DictionaryPrimitive",""],["FixedSizeBinaryArray",""],["FixedSizeBinaryPrimitive","auxiliary struct used to create a [`BinaryArray`] out of an iterator"],["FixedSizeListArray",""],["FixedSizeListPrimitive",""],["ListArray",""],["ListPrimitive",""],["NullArray","The concrete [`Array`] of [`DataType::Null`]."],["Primitive","Auxiliary struct used to create a [`PrimitiveArray`] out of iterators. Primitive arrays are often built from this struct, that knows how to cheaply convert itself into a primitive array."],["PrimitiveArray","A [`PrimitiveArray`] is arrow’s equivalent to `Vec<Option<T: NativeType>>`, i.e. an array designed for highly performant operations on optionally nullable slots, backed by a physical type of a physical byte-width, such as `i32` or `f64`. The size of this struct is `O(1)` as all data is stored behind an [`std::sync::Arc`]."],["StructArray",""],["Utf8Array","A [`Utf8Array`] is arrow’s equivalent of `Vec<Option<String>>`, i.e. an array designed for highly performant operations on optionally nullable strings. The size of this struct is `O(1)` as all data is stored behind an `Arc`."],["Utf8Primitive","auxiliary struct used to create a [`PrimitiveArray`] out of an iterator"]],"trait":[["Array","A trait representing an Arrow array. Arrow arrays are trait objects that are infalibly downcasted to concrete types according to the `Array::data_type`."],["Builder","A trait describing the ability of a struct to build an Array incrementally. There are builders for almost all array types."],["DictionaryKey","Trait denoting [`NativeType`]s that can be used as keys of a dictionary."],["FromFfi","Trait describing how a struct imports into itself from the C data interface (FFI)."],["GenericBinaryArray","Trait that [`BinaryArray`] and [`Utf8Array`] implement for the purposes of DRY."],["Index","Trait describing any type that can be used to index a slot of an array."],["IntoArray","A trait describing the ability of a struct to convert itself to a Arc’ed [`Array`], with its [`DataType`] automatically deducted."],["IterableListArray","Trait that list arrays implement for the purposes of DRY."],["Offset","Trait describing types that can be used as offsets as per Arrow specification. This trait is only implemented for `i32` and `i64`, the two sizes part of the specification."],["ToArray","A trait describing the ability of a struct to convert itself to a Arc’ed [`Array`]."],["TryFromIterator","A trait describing the ability of a struct to create itself from a falible iterator. Used in the context of creating arrays from non-sized iterators."]],"type":[["ArrayRef",""],["Float32Array","A type definition [`PrimitiveArray`] for `f32`"],["Float64Array","A type definition [`PrimitiveArray`] for `f64`"],["Int128Array","A type definition [`PrimitiveArray`] for `i128`"],["Int16Array","A type definition [`PrimitiveArray`] for `i16`"],["Int32Array","A type definition [`PrimitiveArray`] for `i32`"],["Int64Array","A type definition [`PrimitiveArray`] for `i64`"],["Int8Array","A type definition [`PrimitiveArray`] for `i8`"],["UInt16Array","A type definition [`PrimitiveArray`] for `u16`"],["UInt32Array","A type definition [`PrimitiveArray`] for `u32`"],["UInt64Array","A type definition [`PrimitiveArray`] for `u64`"],["UInt8Array","A type definition [`PrimitiveArray`] for `u8`"]]});