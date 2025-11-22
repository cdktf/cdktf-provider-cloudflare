# `dataCloudflareStreams` Submodule <a name="`dataCloudflareStreams` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreams <a name="DataCloudflareStreams" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams cloudflare_streams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreams(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  asc: bool | IResolvable = None,
  creator: str = None,
  end: str = None,
  include_counts: bool | IResolvable = None,
  max_items: typing.Union[int, float] = None,
  search: str = None,
  start: str = None,
  status: str = None,
  type: str = None,
  video_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.asc">asc</a></code> | <code>bool \| cdktf.IResolvable</code> | Lists videos in ascending order of creation. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.creator">creator</a></code> | <code>str</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.end">end</a></code> | <code>str</code> | Lists videos created before the specified date. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.includeCounts">include_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | Includes the total number of videos associated with the submitted query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.search">search</a></code> | <code>str</code> | Provides a partial word match of the `name` key in the `meta` field. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.start">start</a></code> | <code>str</code> | Lists videos created after the specified date. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.status">status</a></code> | <code>str</code> | Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies whether the video is `vod` or `live`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.videoName">video_name</a></code> | <code>str</code> | Provides a fast, exact string match on the `name` key in the `meta` field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#account_id DataCloudflareStreams#account_id}

---

##### `asc`<sup>Optional</sup> <a name="asc" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.asc"></a>

- *Type:* bool | cdktf.IResolvable

Lists videos in ascending order of creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#asc DataCloudflareStreams#asc}

---

##### `creator`<sup>Optional</sup> <a name="creator" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.creator"></a>

- *Type:* str

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#creator DataCloudflareStreams#creator}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.end"></a>

- *Type:* str

Lists videos created before the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#end DataCloudflareStreams#end}

---

##### `include_counts`<sup>Optional</sup> <a name="include_counts" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.includeCounts"></a>

- *Type:* bool | cdktf.IResolvable

Includes the total number of videos associated with the submitted query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#include_counts DataCloudflareStreams#include_counts}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#max_items DataCloudflareStreams#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.search"></a>

- *Type:* str

Provides a partial word match of the `name` key in the `meta` field.

Slow for medium to large video libraries. May be unavailable for very large libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#search DataCloudflareStreams#search}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.start"></a>

- *Type:* str

Lists videos created after the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#start DataCloudflareStreams#start}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.status"></a>

- *Type:* str

Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#status DataCloudflareStreams#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.type"></a>

- *Type:* str

Specifies whether the video is `vod` or `live`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#type DataCloudflareStreams#type}

---

##### `video_name`<sup>Optional</sup> <a name="video_name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.Initializer.parameter.videoName"></a>

- *Type:* str

Provides a fast, exact string match on the `name` key in the `meta` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#video_name DataCloudflareStreams#video_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAsc">reset_asc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetCreator">reset_creator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetIncludeCounts">reset_include_counts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStart">reset_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetVideoName">reset_video_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_asc` <a name="reset_asc" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetAsc"></a>

```python
def reset_asc() -> None
```

##### `reset_creator` <a name="reset_creator" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetCreator"></a>

```python
def reset_creator() -> None
```

##### `reset_end` <a name="reset_end" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_include_counts` <a name="reset_include_counts" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetIncludeCounts"></a>

```python
def reset_include_counts() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStart"></a>

```python
def reset_start() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_video_name` <a name="reset_video_name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.resetVideoName"></a>

```python
def reset_video_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreams.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreams.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreams.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreams.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareStreams to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList">DataCloudflareStreamsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.ascInput">asc_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creatorInput">creator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCountsInput">include_counts_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoNameInput">video_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.asc">asc</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCounts">include_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoName">video_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.result"></a>

```python
result: DataCloudflareStreamsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList">DataCloudflareStreamsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `asc_input`<sup>Optional</sup> <a name="asc_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.ascInput"></a>

```python
asc_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `creator_input`<sup>Optional</sup> <a name="creator_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creatorInput"></a>

```python
creator_input: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `include_counts_input`<sup>Optional</sup> <a name="include_counts_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCountsInput"></a>

```python
include_counts_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `video_name_input`<sup>Optional</sup> <a name="video_name_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoNameInput"></a>

```python
video_name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `asc`<sup>Required</sup> <a name="asc" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.asc"></a>

```python
asc: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `include_counts`<sup>Required</sup> <a name="include_counts" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.includeCounts"></a>

```python
include_counts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `video_name`<sup>Required</sup> <a name="video_name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.videoName"></a>

```python
video_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreams.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamsConfig <a name="DataCloudflareStreamsConfig" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  asc: bool | IResolvable = None,
  creator: str = None,
  end: str = None,
  include_counts: bool | IResolvable = None,
  max_items: typing.Union[int, float] = None,
  search: str = None,
  start: str = None,
  status: str = None,
  type: str = None,
  video_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.asc">asc</a></code> | <code>bool \| cdktf.IResolvable</code> | Lists videos in ascending order of creation. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.creator">creator</a></code> | <code>str</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.end">end</a></code> | <code>str</code> | Lists videos created before the specified date. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.includeCounts">include_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | Includes the total number of videos associated with the submitted query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.search">search</a></code> | <code>str</code> | Provides a partial word match of the `name` key in the `meta` field. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.start">start</a></code> | <code>str</code> | Lists videos created after the specified date. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.status">status</a></code> | <code>str</code> | Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.type">type</a></code> | <code>str</code> | Specifies whether the video is `vod` or `live`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.videoName">video_name</a></code> | <code>str</code> | Provides a fast, exact string match on the `name` key in the `meta` field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#account_id DataCloudflareStreams#account_id}

---

##### `asc`<sup>Optional</sup> <a name="asc" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.asc"></a>

```python
asc: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Lists videos in ascending order of creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#asc DataCloudflareStreams#asc}

---

##### `creator`<sup>Optional</sup> <a name="creator" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.creator"></a>

```python
creator: str
```

- *Type:* str

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#creator DataCloudflareStreams#creator}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.end"></a>

```python
end: str
```

- *Type:* str

Lists videos created before the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#end DataCloudflareStreams#end}

---

##### `include_counts`<sup>Optional</sup> <a name="include_counts" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.includeCounts"></a>

```python
include_counts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Includes the total number of videos associated with the submitted query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#include_counts DataCloudflareStreams#include_counts}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#max_items DataCloudflareStreams#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Provides a partial word match of the `name` key in the `meta` field.

Slow for medium to large video libraries. May be unavailable for very large libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#search DataCloudflareStreams#search}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.start"></a>

```python
start: str
```

- *Type:* str

Lists videos created after the specified date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#start DataCloudflareStreams#start}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Specifies the processing status for all quality levels for a video. Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#status DataCloudflareStreams#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether the video is `vod` or `live`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#type DataCloudflareStreams#type}

---

##### `video_name`<sup>Optional</sup> <a name="video_name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsConfig.property.videoName"></a>

```python
video_name: str
```

- *Type:* str

Provides a fast, exact string match on the `name` key in the `meta` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/streams#video_name DataCloudflareStreams#video_name}

---

### DataCloudflareStreamsResult <a name="DataCloudflareStreamsResult" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResult()
```


### DataCloudflareStreamsResultInput <a name="DataCloudflareStreamsResultInput" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultInput()
```


### DataCloudflareStreamsResultPlayback <a name="DataCloudflareStreamsResultPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultPlayback()
```


### DataCloudflareStreamsResultStatus <a name="DataCloudflareStreamsResultStatus" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultStatus()
```


### DataCloudflareStreamsResultWatermark <a name="DataCloudflareStreamsResultWatermark" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultWatermark()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareStreamsResultInputOutputReference <a name="DataCloudflareStreamsResultInputOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput">DataCloudflareStreamsResultInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareStreamsResultInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInput">DataCloudflareStreamsResultInput</a>

---


### DataCloudflareStreamsResultList <a name="DataCloudflareStreamsResultList" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareStreamsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareStreamsResultOutputReference <a name="DataCloudflareStreamsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference">DataCloudflareStreamsResultInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.liveInput">live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxDurationSeconds">max_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.meta">meta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.playback">playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference">DataCloudflareStreamsResultPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.preview">preview</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStream">ready_to_stream</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStreamAt">ready_to_stream_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.requireSignedUrls">require_signed_urls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.scheduledDeletion">scheduled_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference">DataCloudflareStreamsResultStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnail">thumbnail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnailTimestampPct">thumbnail_timestamp_pct</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploaded">uploaded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploadExpiry">upload_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.watermark">watermark</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference">DataCloudflareStreamsResultWatermarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult">DataCloudflareStreamsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.input"></a>

```python
input: DataCloudflareStreamsResultInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultInputOutputReference">DataCloudflareStreamsResultInputOutputReference</a>

---

##### `live_input`<sup>Required</sup> <a name="live_input" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.liveInput"></a>

```python
live_input: str
```

- *Type:* str

---

##### `max_duration_seconds`<sup>Required</sup> <a name="max_duration_seconds" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.maxDurationSeconds"></a>

```python
max_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.meta"></a>

```python
meta: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `playback`<sup>Required</sup> <a name="playback" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.playback"></a>

```python
playback: DataCloudflareStreamsResultPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference">DataCloudflareStreamsResultPlaybackOutputReference</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.preview"></a>

```python
preview: str
```

- *Type:* str

---

##### `ready_to_stream`<sup>Required</sup> <a name="ready_to_stream" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStream"></a>

```python
ready_to_stream: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ready_to_stream_at`<sup>Required</sup> <a name="ready_to_stream_at" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.readyToStreamAt"></a>

```python
ready_to_stream_at: str
```

- *Type:* str

---

##### `require_signed_urls`<sup>Required</sup> <a name="require_signed_urls" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.requireSignedUrls"></a>

```python
require_signed_urls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_deletion`<sup>Required</sup> <a name="scheduled_deletion" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.scheduledDeletion"></a>

```python
scheduled_deletion: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.status"></a>

```python
status: DataCloudflareStreamsResultStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference">DataCloudflareStreamsResultStatusOutputReference</a>

---

##### `thumbnail`<sup>Required</sup> <a name="thumbnail" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnail"></a>

```python
thumbnail: str
```

- *Type:* str

---

##### `thumbnail_timestamp_pct`<sup>Required</sup> <a name="thumbnail_timestamp_pct" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.thumbnailTimestampPct"></a>

```python
thumbnail_timestamp_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `uploaded`<sup>Required</sup> <a name="uploaded" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploaded"></a>

```python
uploaded: str
```

- *Type:* str

---

##### `upload_expiry`<sup>Required</sup> <a name="upload_expiry" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.uploadExpiry"></a>

```python
upload_expiry: str
```

- *Type:* str

---

##### `watermark`<sup>Required</sup> <a name="watermark" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.watermark"></a>

```python
watermark: DataCloudflareStreamsResultWatermarkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference">DataCloudflareStreamsResultWatermarkOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareStreamsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResult">DataCloudflareStreamsResult</a>

---


### DataCloudflareStreamsResultPlaybackOutputReference <a name="DataCloudflareStreamsResultPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.dash">dash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.hls">hls</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback">DataCloudflareStreamsResultPlayback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.dash"></a>

```python
dash: str
```

- *Type:* str

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.hls"></a>

```python
hls: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlaybackOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareStreamsResultPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultPlayback">DataCloudflareStreamsResultPlayback</a>

---


### DataCloudflareStreamsResultStatusOutputReference <a name="DataCloudflareStreamsResultStatusOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonCode">error_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonText">error_reason_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.pctComplete">pct_complete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus">DataCloudflareStreamsResultStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_reason_code`<sup>Required</sup> <a name="error_reason_code" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonCode"></a>

```python
error_reason_code: str
```

- *Type:* str

---

##### `error_reason_text`<sup>Required</sup> <a name="error_reason_text" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.errorReasonText"></a>

```python
error_reason_text: str
```

- *Type:* str

---

##### `pct_complete`<sup>Required</sup> <a name="pct_complete" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.pctComplete"></a>

```python
pct_complete: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareStreamsResultStatus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultStatus">DataCloudflareStreamsResultStatus</a>

---


### DataCloudflareStreamsResultWatermarkOutputReference <a name="DataCloudflareStreamsResultWatermarkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_streams

dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.downloadedFrom">downloaded_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.opacity">opacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.padding">padding</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark">DataCloudflareStreamsResultWatermark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `downloaded_from`<sup>Required</sup> <a name="downloaded_from" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.downloadedFrom"></a>

```python
downloaded_from: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.opacity"></a>

```python
opacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `padding`<sup>Required</sup> <a name="padding" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.padding"></a>

```python
padding: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermarkOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareStreamsResultWatermark
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreams.DataCloudflareStreamsResultWatermark">DataCloudflareStreamsResultWatermark</a>

---



