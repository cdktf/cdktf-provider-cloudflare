# `streamWatermark` Submodule <a name="`streamWatermark` Submodule" id="@cdktf/provider-cloudflare.streamWatermark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamWatermarkA <a name="StreamWatermarkA" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark cloudflare_stream_watermark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  file: str,
  identifier: str = None,
  name: str = None,
  opacity: typing.Union[int, float] = None,
  padding: typing.Union[int, float] = None,
  position: str = None,
  scale: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.file">file</a></code> | <code>str</code> | The image file to upload. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | The unique identifier for a watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.name">name</a></code> | <code>str</code> | A short description of the watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.opacity">opacity</a></code> | <code>typing.Union[int, float]</code> | The translucency of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.padding">padding</a></code> | <code>typing.Union[int, float]</code> | The whitespace between the adjacent edges (determined by position) of the video and the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.position">position</a></code> | <code>str</code> | The location of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scale">scale</a></code> | <code>typing.Union[int, float]</code> | The size of the image relative to the overall size of the video. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.file"></a>

- *Type:* str

The image file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#file StreamWatermarkA#file}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.identifier"></a>

- *Type:* str

The unique identifier for a watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.name"></a>

- *Type:* str

A short description of the watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#name StreamWatermarkA#name}

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.opacity"></a>

- *Type:* typing.Union[int, float]

The translucency of the image.

A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}

---

##### `padding`<sup>Optional</sup> <a name="padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.padding"></a>

- *Type:* typing.Union[int, float]

The whitespace between the adjacent edges (determined by position) of the video and the image.

`0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#padding StreamWatermarkA#padding}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.position"></a>

- *Type:* str

The location of the image.

Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#position StreamWatermarkA#position}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scale"></a>

- *Type:* typing.Union[int, float]

The size of the image relative to the overall size of the video.

This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#scale StreamWatermarkA#scale}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity">reset_opacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding">reset_padding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale">reset_scale</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opacity` <a name="reset_opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity"></a>

```python
def reset_opacity() -> None
```

##### `reset_padding` <a name="reset_padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding"></a>

```python
def reset_padding() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_scale` <a name="reset_scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale"></a>

```python
def reset_scale() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkA.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamWatermarkA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamWatermarkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamWatermarkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom">downloaded_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput">opacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput">padding_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput">position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput">scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity">opacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding">padding</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `downloaded_from`<sup>Required</sup> <a name="downloaded_from" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom"></a>

```python
downloaded_from: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opacity_input`<sup>Optional</sup> <a name="opacity_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput"></a>

```python
opacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `padding_input`<sup>Optional</sup> <a name="padding_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput"></a>

```python
padding_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput"></a>

```python
position_input: str
```

- *Type:* str

---

##### `scale_input`<sup>Optional</sup> <a name="scale_input" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput"></a>

```python
scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity"></a>

```python
opacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `padding`<sup>Required</sup> <a name="padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding"></a>

```python
padding: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamWatermarkAConfig <a name="StreamWatermarkAConfig" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_watermark

streamWatermark.StreamWatermarkAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  file: str,
  identifier: str = None,
  name: str = None,
  opacity: typing.Union[int, float] = None,
  padding: typing.Union[int, float] = None,
  position: str = None,
  scale: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.file">file</a></code> | <code>str</code> | The image file to upload. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier">identifier</a></code> | <code>str</code> | The unique identifier for a watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name">name</a></code> | <code>str</code> | A short description of the watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity">opacity</a></code> | <code>typing.Union[int, float]</code> | The translucency of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding">padding</a></code> | <code>typing.Union[int, float]</code> | The whitespace between the adjacent edges (determined by position) of the video and the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position">position</a></code> | <code>str</code> | The location of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | The size of the image relative to the overall size of the video. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.file"></a>

```python
file: str
```

- *Type:* str

The image file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#file StreamWatermarkA#file}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The unique identifier for a watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A short description of the watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#name StreamWatermarkA#name}

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity"></a>

```python
opacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The translucency of the image.

A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}

---

##### `padding`<sup>Optional</sup> <a name="padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding"></a>

```python
padding: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The whitespace between the adjacent edges (determined by position) of the video and the image.

`0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#padding StreamWatermarkA#padding}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position"></a>

```python
position: str
```

- *Type:* str

The location of the image.

Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#position StreamWatermarkA#position}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the image relative to the overall size of the video.

This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream_watermark#scale StreamWatermarkA#scale}

---



