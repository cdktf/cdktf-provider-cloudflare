# `dataCloudflareCustomHostnames` Submodule <a name="`dataCloudflareCustomHostnames` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomHostnames <a name="DataCloudflareCustomHostnames" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  direction: str = None,
  hostname: str = None,
  id: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  ssl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Direction to order hostnames. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id">id</a></code> | <code>str</code> | Hostname ID to match against. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to order hostnames by. Available values: "ssl", "ssl_status". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[int, float]</code> | Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#zone_id DataCloudflareCustomHostnames#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.direction"></a>

- *Type:* str

Direction to order hostnames. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#direction DataCloudflareCustomHostnames#direction}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.hostname"></a>

- *Type:* str

Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#hostname DataCloudflareCustomHostnames#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id"></a>

- *Type:* str

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#id DataCloudflareCustomHostnames#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#max_items DataCloudflareCustomHostnames#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.order"></a>

- *Type:* str

Field to order hostnames by. Available values: "ssl", "ssl_status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#order DataCloudflareCustomHostnames#order}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[int, float]

Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#ssl DataCloudflareCustomHostnames#ssl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl">reset_ssl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl"></a>

```python
def reset_ssl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCustomHostnames to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCustomHostnames that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomHostnames to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput">ssl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl">ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result"></a>

```python
result: DataCloudflareCustomHostnamesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput"></a>

```python
ssl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl"></a>

```python
ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomHostnamesConfig <a name="DataCloudflareCustomHostnamesConfig" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  direction: str = None,
  hostname: str = None,
  id: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  ssl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction">direction</a></code> | <code>str</code> | Direction to order hostnames. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname">hostname</a></code> | <code>str</code> | Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id">id</a></code> | <code>str</code> | Hostname ID to match against. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order">order</a></code> | <code>str</code> | Field to order hostnames by. Available values: "ssl", "ssl_status". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl">ssl</a></code> | <code>typing.Union[int, float]</code> | Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#zone_id DataCloudflareCustomHostnames#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to order hostnames. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#direction DataCloudflareCustomHostnames#direction}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#hostname DataCloudflareCustomHostnames#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#id DataCloudflareCustomHostnames#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#max_items DataCloudflareCustomHostnames#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order hostnames by. Available values: "ssl", "ssl_status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#order DataCloudflareCustomHostnames#order}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl"></a>

```python
ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/custom_hostnames#ssl DataCloudflareCustomHostnames#ssl}

---

### DataCloudflareCustomHostnamesResult <a name="DataCloudflareCustomHostnamesResult" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult()
```


### DataCloudflareCustomHostnamesResultOwnershipVerification <a name="DataCloudflareCustomHostnamesResultOwnershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification()
```


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttp <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp()
```


### DataCloudflareCustomHostnamesResultSsl <a name="DataCloudflareCustomHostnamesResultSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl()
```


### DataCloudflareCustomHostnamesResultSslSettings <a name="DataCloudflareCustomHostnamesResultSslSettings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings()
```


### DataCloudflareCustomHostnamesResultSslValidationErrors <a name="DataCloudflareCustomHostnamesResultSslValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors()
```


### DataCloudflareCustomHostnamesResultSslValidationRecords <a name="DataCloudflareCustomHostnamesResultSslValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomHostnamesResultList <a name="DataCloudflareCustomHostnamesResultList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCustomHostnamesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCustomHostnamesResultOutputReference <a name="DataCloudflareCustomHostnamesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata">custom_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer">custom_origin_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni">custom_origin_sni</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification">ownership_verification</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp">ownership_verification_http</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors">verification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata"></a>

```python
custom_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `custom_origin_server`<sup>Required</sup> <a name="custom_origin_server" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer"></a>

```python
custom_origin_server: str
```

- *Type:* str

---

##### `custom_origin_sni`<sup>Required</sup> <a name="custom_origin_sni" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni"></a>

```python
custom_origin_sni: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ownership_verification`<sup>Required</sup> <a name="ownership_verification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification"></a>

```python
ownership_verification: DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a>

---

##### `ownership_verification_http`<sup>Required</sup> <a name="ownership_verification_http" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp"></a>

```python
ownership_verification_http: DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl"></a>

```python
ssl: DataCloudflareCustomHostnamesResultSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `verification_errors`<sup>Required</sup> <a name="verification_errors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors"></a>

```python
verification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody">http_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_body`<sup>Required</sup> <a name="http_body" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```python
http_body: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultOwnershipVerificationHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultOwnershipVerification
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a>

---


### DataCloudflareCustomHostnamesResultSslOutputReference <a name="DataCloudflareCustomHostnamesResultSslOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod">bundle_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority">certificate_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate">custom_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId">custom_csr_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey">custom_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn">uploaded_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors">validation_errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords">validation_records</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard">wildcard</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_method`<sup>Required</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority"></a>

```python
certificate_authority: str
```

- *Type:* str

---

##### `custom_certificate`<sup>Required</sup> <a name="custom_certificate" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate"></a>

```python
custom_certificate: str
```

- *Type:* str

---

##### `custom_csr_id`<sup>Required</sup> <a name="custom_csr_id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId"></a>

```python
custom_csr_id: str
```

- *Type:* str

---

##### `custom_key`<sup>Required</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey"></a>

```python
custom_key: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings"></a>

```python
settings: DataCloudflareCustomHostnamesResultSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uploaded_on`<sup>Required</sup> <a name="uploaded_on" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn"></a>

```python
uploaded_on: str
```

- *Type:* str

---

##### `validation_errors`<sup>Required</sup> <a name="validation_errors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors"></a>

```python
validation_errors: DataCloudflareCustomHostnamesResultSslValidationErrorsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a>

---

##### `validation_records`<sup>Required</sup> <a name="validation_records" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords"></a>

```python
validation_records: DataCloudflareCustomHostnamesResultSslValidationRecordsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a>

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard"></a>

```python
wildcard: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultSsl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a>

---


### DataCloudflareCustomHostnamesResultSslSettingsOutputReference <a name="DataCloudflareCustomHostnamesResultSslSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints">early_hints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2">http2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `early_hints`<sup>Required</sup> <a name="early_hints" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints"></a>

```python
early_hints: str
```

- *Type:* str

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2"></a>

```python
http2: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13"></a>

```python
tls13: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultSslSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a>

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsList <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultSslValidationErrors
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a>

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsList <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_custom_hostnames

dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails">emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody">http_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName">txt_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue">txt_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_body`<sup>Required</sup> <a name="http_body" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody"></a>

```python
http_body: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `txt_name`<sup>Required</sup> <a name="txt_name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName"></a>

```python
txt_name: str
```

- *Type:* str

---

##### `txt_value`<sup>Required</sup> <a name="txt_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue"></a>

```python
txt_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCustomHostnamesResultSslValidationRecords
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a>

---



