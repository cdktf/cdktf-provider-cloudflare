# `dataCloudflareDnsFirewall` Submodule <a name="`dataCloudflareDnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsFirewall <a name="DataCloudflareDnsFirewall" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall(
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
  dns_firewall_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.dnsFirewallId">dns_firewall_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall#account_id DataCloudflareDnsFirewall#account_id}

---

##### `dns_firewall_id`<sup>Optional</sup> <a name="dns_firewall_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.Initializer.parameter.dnsFirewallId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall#dns_firewall_id DataCloudflareDnsFirewall#dns_firewall_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetDnsFirewallId">reset_dns_firewall_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dns_firewall_id` <a name="reset_dns_firewall_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.resetDnsFirewallId"></a>

```python
def reset_dns_firewall_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareDnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareDnsFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareDnsFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareDnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.attackMitigation">attack_mitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference">DataCloudflareDnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.deprecateAnyRequests">deprecate_any_requests</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIps">dns_firewall_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ecsFallback">ecs_fallback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.maximumCacheTtl">maximum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.minimumCacheTtl">minimum_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.negativeCacheTtl">negative_cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ratelimit">ratelimit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.upstreamIps">upstream_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIdInput">dns_firewall_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallId">dns_firewall_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `attack_mitigation`<sup>Required</sup> <a name="attack_mitigation" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.attackMitigation"></a>

```python
attack_mitigation: DataCloudflareDnsFirewallAttackMitigationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference">DataCloudflareDnsFirewallAttackMitigationOutputReference</a>

---

##### `deprecate_any_requests`<sup>Required</sup> <a name="deprecate_any_requests" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.deprecateAnyRequests"></a>

```python
deprecate_any_requests: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dns_firewall_ips`<sup>Required</sup> <a name="dns_firewall_ips" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIps"></a>

```python
dns_firewall_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ecs_fallback`<sup>Required</sup> <a name="ecs_fallback" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ecsFallback"></a>

```python
ecs_fallback: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_cache_ttl`<sup>Required</sup> <a name="maximum_cache_ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.maximumCacheTtl"></a>

```python
maximum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_cache_ttl`<sup>Required</sup> <a name="minimum_cache_ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.minimumCacheTtl"></a>

```python
minimum_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negative_cache_ttl`<sup>Required</sup> <a name="negative_cache_ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.negativeCacheTtl"></a>

```python
negative_cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.ratelimit"></a>

```python
ratelimit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upstream_ips`<sup>Required</sup> <a name="upstream_ips" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.upstreamIps"></a>

```python
upstream_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `dns_firewall_id_input`<sup>Optional</sup> <a name="dns_firewall_id_input" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallIdInput"></a>

```python
dns_firewall_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `dns_firewall_id`<sup>Required</sup> <a name="dns_firewall_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.dnsFirewallId"></a>

```python
dns_firewall_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsFirewallAttackMitigation <a name="DataCloudflareDnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation()
```


### DataCloudflareDnsFirewallConfig <a name="DataCloudflareDnsFirewallConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  dns_firewall_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dnsFirewallId">dns_firewall_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall#account_id DataCloudflareDnsFirewall#account_id}

---

##### `dns_firewall_id`<sup>Optional</sup> <a name="dns_firewall_id" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallConfig.property.dnsFirewallId"></a>

```python
dns_firewall_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/dns_firewall#dns_firewall_id DataCloudflareDnsFirewall#dns_firewall_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsFirewallAttackMitigationOutputReference <a name="DataCloudflareDnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_dns_firewall

dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">only_when_upstream_unhealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation">DataCloudflareDnsFirewallAttackMitigation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `only_when_upstream_unhealthy`<sup>Required</sup> <a name="only_when_upstream_unhealthy" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```python
only_when_upstream_unhealthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareDnsFirewallAttackMitigation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsFirewall.DataCloudflareDnsFirewallAttackMitigation">DataCloudflareDnsFirewallAttackMitigation</a>

---



