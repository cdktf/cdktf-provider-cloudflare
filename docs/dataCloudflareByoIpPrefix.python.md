# `dataCloudflareByoIpPrefix` Submodule <a name="`dataCloudflareByoIpPrefix` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareByoIpPrefix <a name="DataCloudflareByoIpPrefix" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix(
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
  prefix_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.prefixId">prefix_id</a></code> | <code>str</code> | Identifier of an IP Prefix. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix#account_id DataCloudflareByoIpPrefix#account_id}

---

##### `prefix_id`<sup>Optional</sup> <a name="prefix_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.Initializer.parameter.prefixId"></a>

- *Type:* str

Identifier of an IP Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix#prefix_id DataCloudflareByoIpPrefix#prefix_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetPrefixId">reset_prefix_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_prefix_id` <a name="reset_prefix_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.resetPrefixId"></a>

```python
def reset_prefix_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareByoIpPrefix to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareByoIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertised">advertised</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertisedModifiedAt">advertised_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.approved">approved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.loaDocumentId">loa_document_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandEnabled">on_demand_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandLocked">on_demand_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixIdInput">prefix_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixId">prefix_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `advertised`<sup>Required</sup> <a name="advertised" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertised"></a>

```python
advertised: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `advertised_modified_at`<sup>Required</sup> <a name="advertised_modified_at" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.advertisedModifiedAt"></a>

```python
advertised_modified_at: str
```

- *Type:* str

---

##### `approved`<sup>Required</sup> <a name="approved" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.approved"></a>

```python
approved: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `loa_document_id`<sup>Required</sup> <a name="loa_document_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.loaDocumentId"></a>

```python
loa_document_id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `on_demand_enabled`<sup>Required</sup> <a name="on_demand_enabled" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandEnabled"></a>

```python
on_demand_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `on_demand_locked`<sup>Required</sup> <a name="on_demand_locked" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.onDemandLocked"></a>

```python
on_demand_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `prefix_id_input`<sup>Optional</sup> <a name="prefix_id_input" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixIdInput"></a>

```python
prefix_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `prefix_id`<sup>Required</sup> <a name="prefix_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.prefixId"></a>

```python
prefix_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefix.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareByoIpPrefixConfig <a name="DataCloudflareByoIpPrefixConfig" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_byo_ip_prefix

dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  prefix_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.prefixId">prefix_id</a></code> | <code>str</code> | Identifier of an IP Prefix. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix#account_id DataCloudflareByoIpPrefix#account_id}

---

##### `prefix_id`<sup>Optional</sup> <a name="prefix_id" id="@cdktf/provider-cloudflare.dataCloudflareByoIpPrefix.DataCloudflareByoIpPrefixConfig.property.prefixId"></a>

```python
prefix_id: str
```

- *Type:* str

Identifier of an IP Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/byo_ip_prefix#prefix_id DataCloudflareByoIpPrefix#prefix_id}

---



