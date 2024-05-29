# `dlpProfile` Submodule <a name="`dlpProfile` Submodule" id="@cdktf/provider-cloudflare.dlpProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DlpProfile <a name="DlpProfile" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile cloudflare_dlp_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfile(
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
  allowed_match_count: typing.Union[int, float],
  entry: typing.Union[IResolvable, typing.List[DlpProfileEntry]],
  name: str,
  type: str,
  context_awareness: DlpProfileContextAwareness = None,
  description: str = None,
  id: str = None,
  ocr_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#id DlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#account_id DlpProfile#account_id}

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* typing.Union[int, float]

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#allowed_match_count DlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.entry"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#entry DlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.name"></a>

- *Type:* str

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.type"></a>

- *Type:* str

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#type DlpProfile#type}

---

##### `context_awareness`<sup>Optional</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.contextAwareness"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#context_awareness DlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.description"></a>

- *Type:* str

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#description DlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#id DlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#ocr_enabled DlpProfile#ocr_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness">put_context_awareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry">put_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetContextAwareness">reset_context_awareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOcrEnabled">reset_ocr_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_context_awareness` <a name="put_context_awareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness"></a>

```python
def put_context_awareness(
  enabled: typing.Union[bool, IResolvable],
  skip: DlpProfileContextAwarenessSkip
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}

---

###### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness.parameter.skip"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#skip DlpProfile#skip}

---

##### `put_entry` <a name="put_entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry"></a>

```python
def put_entry(
  value: typing.Union[IResolvable, typing.List[DlpProfileEntry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]

---

##### `reset_context_awareness` <a name="reset_context_awareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetContextAwareness"></a>

```python
def reset_context_awareness() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ocr_enabled` <a name="reset_ocr_enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOcrEnabled"></a>

```python
def reset_ocr_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DlpProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DlpProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DlpProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DlpProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DlpProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference">DlpProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList">DlpProfileEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCountInput">allowed_match_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwarenessInput">context_awareness_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entryInput">entry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabledInput">ocr_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `context_awareness`<sup>Required</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwareness"></a>

```python
context_awareness: DlpProfileContextAwarenessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference">DlpProfileContextAwarenessOutputReference</a>

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entry"></a>

```python
entry: DlpProfileEntryList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList">DlpProfileEntryList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_match_count_input`<sup>Optional</sup> <a name="allowed_match_count_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCountInput"></a>

```python
allowed_match_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context_awareness_input`<sup>Optional</sup> <a name="context_awareness_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwarenessInput"></a>

```python
context_awareness_input: DlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entry_input`<sup>Optional</sup> <a name="entry_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entryInput"></a>

```python
entry_input: typing.Union[IResolvable, typing.List[DlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ocr_enabled_input`<sup>Optional</sup> <a name="ocr_enabled_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabledInput"></a>

```python
ocr_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocr_enabled`<sup>Required</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabled"></a>

```python
ocr_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DlpProfileConfig <a name="DlpProfileConfig" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  allowed_match_count: typing.Union[int, float],
  entry: typing.Union[IResolvable, typing.List[DlpProfileEntry]],
  name: str,
  type: str,
  context_awareness: DlpProfileContextAwareness = None,
  description: str = None,
  id: str = None,
  ocr_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.name">name</a></code> | <code>str</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.type">type</a></code> | <code>str</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.description">description</a></code> | <code>str</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#id DlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#account_id DlpProfile#account_id}

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#allowed_match_count DlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.entry"></a>

```python
entry: typing.Union[IResolvable, typing.List[DlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#entry DlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#type DlpProfile#type}

---

##### `context_awareness`<sup>Optional</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.contextAwareness"></a>

```python
context_awareness: DlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#context_awareness DlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#description DlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#id DlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.ocrEnabled"></a>

```python
ocr_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#ocr_enabled DlpProfile#ocr_enabled}

---

### DlpProfileContextAwareness <a name="DlpProfileContextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileContextAwareness(
  enabled: typing.Union[bool, IResolvable],
  skip: DlpProfileContextAwarenessSkip
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | skip block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.skip"></a>

```python
skip: DlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#skip DlpProfile#skip}

---

### DlpProfileContextAwarenessSkip <a name="DlpProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileContextAwarenessSkip(
  files: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.property.files">files</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return all matches, regardless of context analysis result, if the data is a file. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.property.files"></a>

```python
files: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#files DlpProfile#files}

---

### DlpProfileEntry <a name="DlpProfileEntry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileEntry(
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  pattern: DlpProfileEntryPattern = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.name">name</a></code> | <code>str</code> | Name of the entry to deploy. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the entry is active. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.id">id</a></code> | <code>str</code> | Unique entry identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | pattern block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the entry to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the entry is active. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.id"></a>

```python
id: str
```

- *Type:* str

Unique entry identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#id DlpProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.pattern"></a>

```python
pattern: DlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#pattern DlpProfile#pattern}

---

### DlpProfileEntryPattern <a name="DlpProfileEntryPattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileEntryPattern(
  regex: str,
  validation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.regex">regex</a></code> | <code>str</code> | The regex that defines the pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.validation">validation</a></code> | <code>str</code> | The validation algorithm to apply with this pattern. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.regex"></a>

```python
regex: str
```

- *Type:* str

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#regex DlpProfile#regex}

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.validation"></a>

```python
validation: str
```

- *Type:* str

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#validation DlpProfile#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### DlpProfileContextAwarenessOutputReference <a name="DlpProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileContextAwarenessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip">put_skip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skip` <a name="put_skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip"></a>

```python
def put_skip(
  files: typing.Union[bool, IResolvable]
) -> None
```

###### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip.parameter.files"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#files DlpProfile#files}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference">DlpProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skipInput">skip_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skip"></a>

```python
skip: DlpProfileContextAwarenessSkipOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference">DlpProfileContextAwarenessSkipOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_input`<sup>Optional</sup> <a name="skip_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skipInput"></a>

```python
skip_input: DlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.internalValue"></a>

```python
internal_value: DlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

---


### DlpProfileContextAwarenessSkipOutputReference <a name="DlpProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileContextAwarenessSkipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.files"></a>

```python
files: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```python
internal_value: DlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

---


### DlpProfileEntryList <a name="DlpProfileEntryList" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DlpProfileEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]]

---


### DlpProfileEntryOutputReference <a name="DlpProfileEntryOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern">put_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pattern` <a name="put_pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern"></a>

```python
def put_pattern(
  regex: str,
  validation: str = None
) -> None
```

###### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern.parameter.regex"></a>

- *Type:* str

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#regex DlpProfile#regex}

---

###### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern.parameter.validation"></a>

- *Type:* str

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/dlp_profile#validation DlpProfile#validation}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference">DlpProfileEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.patternInput">pattern_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.pattern"></a>

```python
pattern: DlpProfileEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference">DlpProfileEntryPatternOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.patternInput"></a>

```python
pattern_input: DlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DlpProfileEntry]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>]

---


### DlpProfileEntryPatternOutputReference <a name="DlpProfileEntryPatternOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dlp_profile

dlpProfile.DlpProfileEntryPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resetValidation">reset_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_validation` <a name="reset_validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resetValidation"></a>

```python
def reset_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validationInput">validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validation">validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validationInput"></a>

```python
validation_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validation"></a>

```python
validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.internalValue"></a>

```python
internal_value: DlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

---



