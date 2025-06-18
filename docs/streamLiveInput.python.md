# `streamLiveInput` Submodule <a name="`streamLiveInput` Submodule" id="@cdktf/provider-cloudflare.streamLiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamLiveInput <a name="StreamLiveInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input cloudflare_stream_live_input}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInput(
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
  default_creator: str = None,
  delete_recording_after_days: typing.Union[int, float] = None,
  live_input_identifier: str = None,
  meta: str = None,
  recording: StreamLiveInputRecording = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.defaultCreator">default_creator</a></code> | <code>str</code> | Sets the creator ID asssociated with this live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.deleteRecordingAfterDays">delete_recording_after_days</a></code> | <code>typing.Union[int, float]</code> | Indicates the number of days after which the live inputs recordings will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.liveInputIdentifier">live_input_identifier</a></code> | <code>str</code> | A unique identifier for a live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.meta">meta</a></code> | <code>str</code> | A user modifiable key-value store used to reference other systems of record for managing live inputs. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.recording">recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a></code> | Records the input to a Cloudflare Stream video. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#account_id StreamLiveInput#account_id}

---

##### `default_creator`<sup>Optional</sup> <a name="default_creator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.defaultCreator"></a>

- *Type:* str

Sets the creator ID asssociated with this live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#default_creator StreamLiveInput#default_creator}

---

##### `delete_recording_after_days`<sup>Optional</sup> <a name="delete_recording_after_days" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.deleteRecordingAfterDays"></a>

- *Type:* typing.Union[int, float]

Indicates the number of days after which the live inputs recordings will be deleted.

When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#delete_recording_after_days StreamLiveInput#delete_recording_after_days}

---

##### `live_input_identifier`<sup>Optional</sup> <a name="live_input_identifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.liveInputIdentifier"></a>

- *Type:* str

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#live_input_identifier StreamLiveInput#live_input_identifier}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.meta"></a>

- *Type:* str

A user modifiable key-value store used to reference other systems of record for managing live inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#meta StreamLiveInput#meta}

---

##### `recording`<sup>Optional</sup> <a name="recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.recording"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>

Records the input to a Cloudflare Stream video.

Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#recording StreamLiveInput#recording}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording">put_recording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDefaultCreator">reset_default_creator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDeleteRecordingAfterDays">reset_delete_recording_after_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetLiveInputIdentifier">reset_live_input_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetRecording">reset_recording</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recording` <a name="put_recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording"></a>

```python
def put_recording(
  allowed_origins: typing.List[str] = None,
  hide_live_viewer_count: typing.Union[bool, IResolvable] = None,
  mode: str = None,
  require_signed_urls: typing.Union[bool, IResolvable] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Lists the origins allowed to display videos created with this input.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#allowed_origins StreamLiveInput#allowed_origins}

---

###### `hide_live_viewer_count`<sup>Optional</sup> <a name="hide_live_viewer_count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.hideLiveViewerCount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables reporting the number of live viewers when this property is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#hide_live_viewer_count StreamLiveInput#hide_live_viewer_count}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.mode"></a>

- *Type:* str

Specifies the recording behavior for the live input.

Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.
Available values: "off", "automatic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#mode StreamLiveInput#mode}

---

###### `require_signed_urls`<sup>Optional</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.requireSignedUrls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if a video using the live input has the `requireSignedURLs` property set.

Also enforces access controls on any video recording of the livestream with the live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#require_signed_urls StreamLiveInput#require_signed_urls}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand.

`0` is recommended for most use cases and indicates the platform default should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#timeout_seconds StreamLiveInput#timeout_seconds}

---

##### `reset_default_creator` <a name="reset_default_creator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDefaultCreator"></a>

```python
def reset_default_creator() -> None
```

##### `reset_delete_recording_after_days` <a name="reset_delete_recording_after_days" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDeleteRecordingAfterDays"></a>

```python
def reset_delete_recording_after_days() -> None
```

##### `reset_live_input_identifier` <a name="reset_live_input_identifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetLiveInputIdentifier"></a>

```python
def reset_live_input_identifier() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_recording` <a name="reset_recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetRecording"></a>

```python
def reset_recording() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamLiveInput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamLiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamLiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recording">recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference">StreamLiveInputRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmps">rtmps</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference">StreamLiveInputRtmpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmpsPlayback">rtmps_playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference">StreamLiveInputRtmpsPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srt">srt</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference">StreamLiveInputSrtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srtPlayback">srt_playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference">StreamLiveInputSrtPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtc">web_rtc</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference">StreamLiveInputWebRtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtcPlayback">web_rtc_playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference">StreamLiveInputWebRtcPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreatorInput">default_creator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDaysInput">delete_recording_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifierInput">live_input_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.metaInput">meta_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recordingInput">recording_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreator">default_creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDays">delete_recording_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifier">live_input_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.meta">meta</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `recording`<sup>Required</sup> <a name="recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recording"></a>

```python
recording: StreamLiveInputRecordingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference">StreamLiveInputRecordingOutputReference</a>

---

##### `rtmps`<sup>Required</sup> <a name="rtmps" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmps"></a>

```python
rtmps: StreamLiveInputRtmpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference">StreamLiveInputRtmpsOutputReference</a>

---

##### `rtmps_playback`<sup>Required</sup> <a name="rtmps_playback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmpsPlayback"></a>

```python
rtmps_playback: StreamLiveInputRtmpsPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference">StreamLiveInputRtmpsPlaybackOutputReference</a>

---

##### `srt`<sup>Required</sup> <a name="srt" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srt"></a>

```python
srt: StreamLiveInputSrtOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference">StreamLiveInputSrtOutputReference</a>

---

##### `srt_playback`<sup>Required</sup> <a name="srt_playback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srtPlayback"></a>

```python
srt_playback: StreamLiveInputSrtPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference">StreamLiveInputSrtPlaybackOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `web_rtc`<sup>Required</sup> <a name="web_rtc" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtc"></a>

```python
web_rtc: StreamLiveInputWebRtcOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference">StreamLiveInputWebRtcOutputReference</a>

---

##### `web_rtc_playback`<sup>Required</sup> <a name="web_rtc_playback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtcPlayback"></a>

```python
web_rtc_playback: StreamLiveInputWebRtcPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference">StreamLiveInputWebRtcPlaybackOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `default_creator_input`<sup>Optional</sup> <a name="default_creator_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreatorInput"></a>

```python
default_creator_input: str
```

- *Type:* str

---

##### `delete_recording_after_days_input`<sup>Optional</sup> <a name="delete_recording_after_days_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDaysInput"></a>

```python
delete_recording_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_input_identifier_input`<sup>Optional</sup> <a name="live_input_identifier_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifierInput"></a>

```python
live_input_identifier_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.metaInput"></a>

```python
meta_input: str
```

- *Type:* str

---

##### `recording_input`<sup>Optional</sup> <a name="recording_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recordingInput"></a>

```python
recording_input: typing.Union[IResolvable, StreamLiveInputRecording]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `default_creator`<sup>Required</sup> <a name="default_creator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreator"></a>

```python
default_creator: str
```

- *Type:* str

---

##### `delete_recording_after_days`<sup>Required</sup> <a name="delete_recording_after_days" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDays"></a>

```python
delete_recording_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_input_identifier`<sup>Required</sup> <a name="live_input_identifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifier"></a>

```python
live_input_identifier: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamLiveInputConfig <a name="StreamLiveInputConfig" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  default_creator: str = None,
  delete_recording_after_days: typing.Union[int, float] = None,
  live_input_identifier: str = None,
  meta: str = None,
  recording: StreamLiveInputRecording = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.defaultCreator">default_creator</a></code> | <code>str</code> | Sets the creator ID asssociated with this live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.deleteRecordingAfterDays">delete_recording_after_days</a></code> | <code>typing.Union[int, float]</code> | Indicates the number of days after which the live inputs recordings will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.liveInputIdentifier">live_input_identifier</a></code> | <code>str</code> | A unique identifier for a live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.meta">meta</a></code> | <code>str</code> | A user modifiable key-value store used to reference other systems of record for managing live inputs. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.recording">recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a></code> | Records the input to a Cloudflare Stream video. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#account_id StreamLiveInput#account_id}

---

##### `default_creator`<sup>Optional</sup> <a name="default_creator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.defaultCreator"></a>

```python
default_creator: str
```

- *Type:* str

Sets the creator ID asssociated with this live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#default_creator StreamLiveInput#default_creator}

---

##### `delete_recording_after_days`<sup>Optional</sup> <a name="delete_recording_after_days" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.deleteRecordingAfterDays"></a>

```python
delete_recording_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the number of days after which the live inputs recordings will be deleted.

When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#delete_recording_after_days StreamLiveInput#delete_recording_after_days}

---

##### `live_input_identifier`<sup>Optional</sup> <a name="live_input_identifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.liveInputIdentifier"></a>

```python
live_input_identifier: str
```

- *Type:* str

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#live_input_identifier StreamLiveInput#live_input_identifier}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.meta"></a>

```python
meta: str
```

- *Type:* str

A user modifiable key-value store used to reference other systems of record for managing live inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#meta StreamLiveInput#meta}

---

##### `recording`<sup>Optional</sup> <a name="recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.recording"></a>

```python
recording: StreamLiveInputRecording
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>

Records the input to a Cloudflare Stream video.

Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#recording StreamLiveInput#recording}

---

### StreamLiveInputRecording <a name="StreamLiveInputRecording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRecording(
  allowed_origins: typing.List[str] = None,
  hide_live_viewer_count: typing.Union[bool, IResolvable] = None,
  mode: str = None,
  require_signed_urls: typing.Union[bool, IResolvable] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Lists the origins allowed to display videos created with this input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.hideLiveViewerCount">hide_live_viewer_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables reporting the number of live viewers when this property is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.mode">mode</a></code> | <code>str</code> | Specifies the recording behavior for the live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.requireSignedUrls">require_signed_urls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if a video using the live input has the `requireSignedURLs` property set. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand. |

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Lists the origins allowed to display videos created with this input.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#allowed_origins StreamLiveInput#allowed_origins}

---

##### `hide_live_viewer_count`<sup>Optional</sup> <a name="hide_live_viewer_count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.hideLiveViewerCount"></a>

```python
hide_live_viewer_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables reporting the number of live viewers when this property is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#hide_live_viewer_count StreamLiveInput#hide_live_viewer_count}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies the recording behavior for the live input.

Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.
Available values: "off", "automatic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#mode StreamLiveInput#mode}

---

##### `require_signed_urls`<sup>Optional</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.requireSignedUrls"></a>

```python
require_signed_urls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if a video using the live input has the `requireSignedURLs` property set.

Also enforces access controls on any video recording of the livestream with the live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#require_signed_urls StreamLiveInput#require_signed_urls}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand.

`0` is recommended for most use cases and indicates the platform default should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream_live_input#timeout_seconds StreamLiveInput#timeout_seconds}

---

### StreamLiveInputRtmps <a name="StreamLiveInputRtmps" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRtmps()
```


### StreamLiveInputRtmpsPlayback <a name="StreamLiveInputRtmpsPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRtmpsPlayback()
```


### StreamLiveInputSrt <a name="StreamLiveInputSrt" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputSrt()
```


### StreamLiveInputSrtPlayback <a name="StreamLiveInputSrtPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputSrtPlayback()
```


### StreamLiveInputWebRtc <a name="StreamLiveInputWebRtc" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputWebRtc()
```


### StreamLiveInputWebRtcPlayback <a name="StreamLiveInputWebRtcPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputWebRtcPlayback()
```


## Classes <a name="Classes" id="Classes"></a>

### StreamLiveInputRecordingOutputReference <a name="StreamLiveInputRecordingOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRecordingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetHideLiveViewerCount">reset_hide_live_viewer_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetRequireSignedUrls">reset_require_signed_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_hide_live_viewer_count` <a name="reset_hide_live_viewer_count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetHideLiveViewerCount"></a>

```python
def reset_hide_live_viewer_count() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_require_signed_urls` <a name="reset_require_signed_urls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetRequireSignedUrls"></a>

```python
def reset_require_signed_urls() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCountInput">hide_live_viewer_count_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrlsInput">require_signed_urls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCount">hide_live_viewer_count</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrls">require_signed_urls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_live_viewer_count_input`<sup>Optional</sup> <a name="hide_live_viewer_count_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCountInput"></a>

```python
hide_live_viewer_count_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `require_signed_urls_input`<sup>Optional</sup> <a name="require_signed_urls_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrlsInput"></a>

```python
require_signed_urls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_live_viewer_count`<sup>Required</sup> <a name="hide_live_viewer_count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCount"></a>

```python
hide_live_viewer_count: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `require_signed_urls`<sup>Required</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrls"></a>

```python
require_signed_urls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamLiveInputRecording]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>]

---


### StreamLiveInputRtmpsOutputReference <a name="StreamLiveInputRtmpsOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRtmpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.streamKey">stream_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps">StreamLiveInputRtmps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_key`<sup>Required</sup> <a name="stream_key" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.streamKey"></a>

```python
stream_key: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputRtmps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps">StreamLiveInputRtmps</a>

---


### StreamLiveInputRtmpsPlaybackOutputReference <a name="StreamLiveInputRtmpsPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.streamKey">stream_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback">StreamLiveInputRtmpsPlayback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_key`<sup>Required</sup> <a name="stream_key" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.streamKey"></a>

```python
stream_key: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputRtmpsPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback">StreamLiveInputRtmpsPlayback</a>

---


### StreamLiveInputSrtOutputReference <a name="StreamLiveInputSrtOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputSrtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt">StreamLiveInputSrt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputSrt
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt">StreamLiveInputSrt</a>

---


### StreamLiveInputSrtPlaybackOutputReference <a name="StreamLiveInputSrtPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputSrtPlaybackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback">StreamLiveInputSrtPlayback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputSrtPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback">StreamLiveInputSrtPlayback</a>

---


### StreamLiveInputWebRtcOutputReference <a name="StreamLiveInputWebRtcOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputWebRtcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc">StreamLiveInputWebRtc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputWebRtc
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc">StreamLiveInputWebRtc</a>

---


### StreamLiveInputWebRtcPlaybackOutputReference <a name="StreamLiveInputWebRtcPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream_live_input

streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback">StreamLiveInputWebRtcPlayback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.internalValue"></a>

```python
internal_value: StreamLiveInputWebRtcPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback">StreamLiveInputWebRtcPlayback</a>

---



