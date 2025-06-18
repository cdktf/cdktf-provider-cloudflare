# `stream` Submodule <a name="`stream` Submodule" id="@cdktf/provider-cloudflare.stream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stream <a name="Stream" id="@cdktf/provider-cloudflare.stream.Stream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream cloudflare_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.Stream.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.Stream(
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
  allowed_origins: typing.List[str] = None,
  creator: str = None,
  identifier: str = None,
  max_duration_seconds: typing.Union[int, float] = None,
  meta: str = None,
  require_signed_urls: typing.Union[bool, IResolvable] = None,
  scheduled_deletion: str = None,
  thumbnail_timestamp_pct: typing.Union[int, float] = None,
  upload_expiry: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Lists the origins allowed to display the video. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.creator">creator</a></code> | <code>str</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.maxDurationSeconds">max_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum duration in seconds for a video upload. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.meta">meta</a></code> | <code>str</code> | A user modifiable key-value store used to reference other systems of record for managing videos. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.requireSignedUrls">require_signed_urls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the video can be a accessed using the UID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scheduledDeletion">scheduled_deletion</a></code> | <code>str</code> | Indicates the date and time at which the video will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.thumbnailTimestampPct">thumbnail_timestamp_pct</a></code> | <code>typing.Union[int, float]</code> | The timestamp for a thumbnail image calculated as a percentage value of the video's duration. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.uploadExpiry">upload_expiry</a></code> | <code>str</code> | The date and time when the video upload URL is no longer valid for direct user uploads. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#account_id Stream#account_id}

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Lists the origins allowed to display the video.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#allowed_origins Stream#allowed_origins}

---

##### `creator`<sup>Optional</sup> <a name="creator" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.creator"></a>

- *Type:* str

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#creator Stream#creator}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.identifier"></a>

- *Type:* str

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#identifier Stream#identifier}

---

##### `max_duration_seconds`<sup>Optional</sup> <a name="max_duration_seconds" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.maxDurationSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum duration in seconds for a video upload.

Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.meta"></a>

- *Type:* str

A user modifiable key-value store used to reference other systems of record for managing videos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#meta Stream#meta}

---

##### `require_signed_urls`<sup>Optional</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.requireSignedUrls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the video can be a accessed using the UID.

When set to `true`, a signed token must be generated with a signing key to view the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}

---

##### `scheduled_deletion`<sup>Optional</sup> <a name="scheduled_deletion" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scheduledDeletion"></a>

- *Type:* str

Indicates the date and time at which the video will be deleted.

Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}

---

##### `thumbnail_timestamp_pct`<sup>Optional</sup> <a name="thumbnail_timestamp_pct" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.thumbnailTimestampPct"></a>

- *Type:* typing.Union[int, float]

The timestamp for a thumbnail image calculated as a percentage value of the video's duration.

To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}

---

##### `upload_expiry`<sup>Optional</sup> <a name="upload_expiry" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.uploadExpiry"></a>

- *Type:* str

The date and time when the video upload URL is no longer valid for direct user uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#upload_expiry Stream#upload_expiry}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetCreator">reset_creator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetMaxDurationSeconds">reset_max_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetRequireSignedUrls">reset_require_signed_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetScheduledDeletion">reset_scheduled_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct">reset_thumbnail_timestamp_pct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetUploadExpiry">reset_upload_expiry</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.stream.Stream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.stream.Stream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.stream.Stream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.stream.Stream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.stream.Stream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.stream.Stream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.stream.Stream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.stream.Stream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.stream.Stream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.stream.Stream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.stream.Stream.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.stream.Stream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.stream.Stream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.stream.Stream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.stream.Stream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.stream.Stream.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.stream.Stream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktf/provider-cloudflare.stream.Stream.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_creator` <a name="reset_creator" id="@cdktf/provider-cloudflare.stream.Stream.resetCreator"></a>

```python
def reset_creator() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-cloudflare.stream.Stream.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_max_duration_seconds` <a name="reset_max_duration_seconds" id="@cdktf/provider-cloudflare.stream.Stream.resetMaxDurationSeconds"></a>

```python
def reset_max_duration_seconds() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-cloudflare.stream.Stream.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_require_signed_urls` <a name="reset_require_signed_urls" id="@cdktf/provider-cloudflare.stream.Stream.resetRequireSignedUrls"></a>

```python
def reset_require_signed_urls() -> None
```

##### `reset_scheduled_deletion` <a name="reset_scheduled_deletion" id="@cdktf/provider-cloudflare.stream.Stream.resetScheduledDeletion"></a>

```python
def reset_scheduled_deletion() -> None
```

##### `reset_thumbnail_timestamp_pct` <a name="reset_thumbnail_timestamp_pct" id="@cdktf/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct"></a>

```python
def reset_thumbnail_timestamp_pct() -> None
```

##### `reset_upload_expiry` <a name="reset_upload_expiry" id="@cdktf/provider-cloudflare.stream.Stream.resetUploadExpiry"></a>

```python
def reset_upload_expiry() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.stream.Stream.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.Stream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.Stream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.Stream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.Stream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Stream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Stream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Stream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.liveInput">live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.playback">playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.preview">preview</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.readyToStream">ready_to_stream</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.readyToStreamAt">ready_to_stream_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.status">status</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnail">thumbnail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploaded">uploaded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.watermark">watermark</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.creatorInput">creator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput">max_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.metaInput">meta_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput">require_signed_urls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletionInput">scheduled_deletion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput">thumbnail_timestamp_pct_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiryInput">upload_expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSeconds">max_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrls">require_signed_urls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletion">scheduled_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct">thumbnail_timestamp_pct</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiry">upload_expiry</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.stream.Stream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.stream.Stream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.Stream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.stream.Stream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.stream.Stream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.stream.Stream.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.stream.Stream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.stream.Stream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.stream.Stream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.stream.Stream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.stream.Stream.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.stream.Stream.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.stream.Stream.property.input"></a>

```python
input: StreamInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a>

---

##### `live_input`<sup>Required</sup> <a name="live_input" id="@cdktf/provider-cloudflare.stream.Stream.property.liveInput"></a>

```python
live_input: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.stream.Stream.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `playback`<sup>Required</sup> <a name="playback" id="@cdktf/provider-cloudflare.stream.Stream.property.playback"></a>

```python
playback: StreamPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.stream.Stream.property.preview"></a>

```python
preview: str
```

- *Type:* str

---

##### `ready_to_stream`<sup>Required</sup> <a name="ready_to_stream" id="@cdktf/provider-cloudflare.stream.Stream.property.readyToStream"></a>

```python
ready_to_stream: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ready_to_stream_at`<sup>Required</sup> <a name="ready_to_stream_at" id="@cdktf/provider-cloudflare.stream.Stream.property.readyToStreamAt"></a>

```python
ready_to_stream_at: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.stream.Stream.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.stream.Stream.property.status"></a>

```python
status: StreamStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a>

---

##### `thumbnail`<sup>Required</sup> <a name="thumbnail" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnail"></a>

```python
thumbnail: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.stream.Stream.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `uploaded`<sup>Required</sup> <a name="uploaded" id="@cdktf/provider-cloudflare.stream.Stream.property.uploaded"></a>

```python
uploaded: str
```

- *Type:* str

---

##### `watermark`<sup>Required</sup> <a name="watermark" id="@cdktf/provider-cloudflare.stream.Stream.property.watermark"></a>

```python
watermark: StreamWatermarkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.stream.Stream.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-cloudflare.stream.Stream.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator_input`<sup>Optional</sup> <a name="creator_input" id="@cdktf/provider-cloudflare.stream.Stream.property.creatorInput"></a>

```python
creator_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-cloudflare.stream.Stream.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `max_duration_seconds_input`<sup>Optional</sup> <a name="max_duration_seconds_input" id="@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput"></a>

```python
max_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-cloudflare.stream.Stream.property.metaInput"></a>

```python
meta_input: str
```

- *Type:* str

---

##### `require_signed_urls_input`<sup>Optional</sup> <a name="require_signed_urls_input" id="@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput"></a>

```python
require_signed_urls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scheduled_deletion_input`<sup>Optional</sup> <a name="scheduled_deletion_input" id="@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletionInput"></a>

```python
scheduled_deletion_input: str
```

- *Type:* str

---

##### `thumbnail_timestamp_pct_input`<sup>Optional</sup> <a name="thumbnail_timestamp_pct_input" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput"></a>

```python
thumbnail_timestamp_pct_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_expiry_input`<sup>Optional</sup> <a name="upload_expiry_input" id="@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiryInput"></a>

```python
upload_expiry_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.stream.Stream.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.stream.Stream.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-cloudflare.stream.Stream.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.stream.Stream.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `max_duration_seconds`<sup>Required</sup> <a name="max_duration_seconds" id="@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSeconds"></a>

```python
max_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.stream.Stream.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `require_signed_urls`<sup>Required</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrls"></a>

```python
require_signed_urls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scheduled_deletion`<sup>Required</sup> <a name="scheduled_deletion" id="@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletion"></a>

```python
scheduled_deletion: str
```

- *Type:* str

---

##### `thumbnail_timestamp_pct`<sup>Required</sup> <a name="thumbnail_timestamp_pct" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct"></a>

```python
thumbnail_timestamp_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_expiry`<sup>Required</sup> <a name="upload_expiry" id="@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiry"></a>

```python
upload_expiry: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.stream.Stream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConfig <a name="StreamConfig" id="@cdktf/provider-cloudflare.stream.StreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  allowed_origins: typing.List[str] = None,
  creator: str = None,
  identifier: str = None,
  max_duration_seconds: typing.Union[int, float] = None,
  meta: str = None,
  require_signed_urls: typing.Union[bool, IResolvable] = None,
  scheduled_deletion: str = None,
  thumbnail_timestamp_pct: typing.Union[int, float] = None,
  upload_expiry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Lists the origins allowed to display the video. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.creator">creator</a></code> | <code>str</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.identifier">identifier</a></code> | <code>str</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds">max_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum duration in seconds for a video upload. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.meta">meta</a></code> | <code>str</code> | A user modifiable key-value store used to reference other systems of record for managing videos. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls">require_signed_urls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the video can be a accessed using the UID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion">scheduled_deletion</a></code> | <code>str</code> | Indicates the date and time at which the video will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct">thumbnail_timestamp_pct</a></code> | <code>typing.Union[int, float]</code> | The timestamp for a thumbnail image calculated as a percentage value of the video's duration. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.uploadExpiry">upload_expiry</a></code> | <code>str</code> | The date and time when the video upload URL is no longer valid for direct user uploads. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#account_id Stream#account_id}

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Lists the origins allowed to display the video.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#allowed_origins Stream#allowed_origins}

---

##### `creator`<sup>Optional</sup> <a name="creator" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.creator"></a>

```python
creator: str
```

- *Type:* str

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#creator Stream#creator}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#identifier Stream#identifier}

---

##### `max_duration_seconds`<sup>Optional</sup> <a name="max_duration_seconds" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds"></a>

```python
max_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum duration in seconds for a video upload.

Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.meta"></a>

```python
meta: str
```

- *Type:* str

A user modifiable key-value store used to reference other systems of record for managing videos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#meta Stream#meta}

---

##### `require_signed_urls`<sup>Optional</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls"></a>

```python
require_signed_urls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the video can be a accessed using the UID.

When set to `true`, a signed token must be generated with a signing key to view the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}

---

##### `scheduled_deletion`<sup>Optional</sup> <a name="scheduled_deletion" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion"></a>

```python
scheduled_deletion: str
```

- *Type:* str

Indicates the date and time at which the video will be deleted.

Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}

---

##### `thumbnail_timestamp_pct`<sup>Optional</sup> <a name="thumbnail_timestamp_pct" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct"></a>

```python
thumbnail_timestamp_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timestamp for a thumbnail image calculated as a percentage value of the video's duration.

To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}

---

##### `upload_expiry`<sup>Optional</sup> <a name="upload_expiry" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.uploadExpiry"></a>

```python
upload_expiry: str
```

- *Type:* str

The date and time when the video upload URL is no longer valid for direct user uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/stream#upload_expiry Stream#upload_expiry}

---

### StreamInput <a name="StreamInput" id="@cdktf/provider-cloudflare.stream.StreamInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamInput()
```


### StreamPlayback <a name="StreamPlayback" id="@cdktf/provider-cloudflare.stream.StreamPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamPlayback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamPlayback()
```


### StreamStatus <a name="StreamStatus" id="@cdktf/provider-cloudflare.stream.StreamStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamStatus()
```


### StreamWatermark <a name="StreamWatermark" id="@cdktf/provider-cloudflare.stream.StreamWatermark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamWatermark.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamWatermark()
```


## Classes <a name="Classes" id="Classes"></a>

### StreamInputOutputReference <a name="StreamInputOutputReference" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamInput">StreamInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue"></a>

```python
internal_value: StreamInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamInput">StreamInput</a>

---


### StreamPlaybackOutputReference <a name="StreamPlaybackOutputReference" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamPlaybackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash">dash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls">hls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash"></a>

```python
dash: str
```

- *Type:* str

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls"></a>

```python
hls: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue"></a>

```python
internal_value: StreamPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a>

---


### StreamStatusOutputReference <a name="StreamStatusOutputReference" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode">error_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText">error_reason_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete">pct_complete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatus">StreamStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_reason_code`<sup>Required</sup> <a name="error_reason_code" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode"></a>

```python
error_reason_code: str
```

- *Type:* str

---

##### `error_reason_text`<sup>Required</sup> <a name="error_reason_text" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText"></a>

```python
error_reason_text: str
```

- *Type:* str

---

##### `pct_complete`<sup>Required</sup> <a name="pct_complete" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete"></a>

```python
pct_complete: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue"></a>

```python
internal_value: StreamStatus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamStatus">StreamStatus</a>

---


### StreamWatermarkOutputReference <a name="StreamWatermarkOutputReference" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import stream

stream.StreamWatermarkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom">downloaded_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity">opacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding">padding</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `downloaded_from`<sup>Required</sup> <a name="downloaded_from" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom"></a>

```python
downloaded_from: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity"></a>

```python
opacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `padding`<sup>Required</sup> <a name="padding" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding"></a>

```python
padding: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue"></a>

```python
internal_value: StreamWatermark
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a>

---



