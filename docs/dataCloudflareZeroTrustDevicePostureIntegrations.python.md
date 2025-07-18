# `dataCloudflareZeroTrustDevicePostureIntegrations` Submodule <a name="`dataCloudflareZeroTrustDevicePostureIntegrations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureIntegrations <a name="DataCloudflareZeroTrustDevicePostureIntegrations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations cloudflare_zero_trust_device_posture_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#account_id DataCloudflareZeroTrustDevicePostureIntegrations#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#account_id DataCloudflareZeroTrustDevicePostureIntegrations#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#max_items DataCloudflareZeroTrustDevicePostureIntegrations#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDevicePostureIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList">DataCloudflareZeroTrustDevicePostureIntegrationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.result"></a>

```python
result: DataCloudflareZeroTrustDevicePostureIntegrationsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList">DataCloudflareZeroTrustDevicePostureIntegrationsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureIntegrationsConfig <a name="DataCloudflareZeroTrustDevicePostureIntegrationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#account_id DataCloudflareZeroTrustDevicePostureIntegrations#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#account_id DataCloudflareZeroTrustDevicePostureIntegrations#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/zero_trust_device_posture_integrations#max_items DataCloudflareZeroTrustDevicePostureIntegrations#max_items}

---

### DataCloudflareZeroTrustDevicePostureIntegrationsResult <a name="DataCloudflareZeroTrustDevicePostureIntegrationsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResult()
```


### DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig <a name="DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference <a name="DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig">DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig">DataCloudflareZeroTrustDevicePostureIntegrationsResultConfig</a>

---


### DataCloudflareZeroTrustDevicePostureIntegrationsResultList <a name="DataCloudflareZeroTrustDevicePostureIntegrationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference <a name="DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_integrations

dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference">DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResult">DataCloudflareZeroTrustDevicePostureIntegrationsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.config"></a>

```python
config: DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference">DataCloudflareZeroTrustDevicePostureIntegrationsResultConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureIntegrationsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureIntegrations.DataCloudflareZeroTrustDevicePostureIntegrationsResult">DataCloudflareZeroTrustDevicePostureIntegrationsResult</a>

---



