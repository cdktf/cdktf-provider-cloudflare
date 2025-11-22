# `dataCloudflareZeroTrustGatewayProxyEndpoints` Submodule <a name="`dataCloudflareZeroTrustGatewayProxyEndpoints` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayProxyEndpoints <a name="DataCloudflareZeroTrustGatewayProxyEndpoints" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints cloudflare_zero_trust_gateway_proxy_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#account_id DataCloudflareZeroTrustGatewayProxyEndpoints#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#account_id DataCloudflareZeroTrustGatewayProxyEndpoints#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#max_items DataCloudflareZeroTrustGatewayProxyEndpoints#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayProxyEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayProxyEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayProxyEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustGatewayProxyEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayProxyEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList">DataCloudflareZeroTrustGatewayProxyEndpointsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.result"></a>

```python
result: DataCloudflareZeroTrustGatewayProxyEndpointsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList">DataCloudflareZeroTrustGatewayProxyEndpointsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayProxyEndpointsConfig <a name="DataCloudflareZeroTrustGatewayProxyEndpointsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#account_id DataCloudflareZeroTrustGatewayProxyEndpoints#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#account_id DataCloudflareZeroTrustGatewayProxyEndpoints#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_gateway_proxy_endpoints#max_items DataCloudflareZeroTrustGatewayProxyEndpoints#max_items}

---

### DataCloudflareZeroTrustGatewayProxyEndpointsResult <a name="DataCloudflareZeroTrustGatewayProxyEndpointsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayProxyEndpointsResultList <a name="DataCloudflareZeroTrustGatewayProxyEndpointsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference <a name="DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_gateway_proxy_endpoints

dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResult">DataCloudflareZeroTrustGatewayProxyEndpointsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustGatewayProxyEndpointsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoints.DataCloudflareZeroTrustGatewayProxyEndpointsResult">DataCloudflareZeroTrustGatewayProxyEndpointsResult</a>

---



