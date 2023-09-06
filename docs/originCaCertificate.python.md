# `cloudflare_origin_ca_certificate`

Refer to the Terraform Registory for docs: [`cloudflare_origin_ca_certificate`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate).

# `originCaCertificate` Submodule <a name="`originCaCertificate` Submodule" id="@cdktf/provider-cloudflare.originCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OriginCaCertificate <a name="OriginCaCertificate" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import origin_ca_certificate

originCaCertificate.OriginCaCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  csr: str,
  hostnames: typing.List[str],
  request_type: str,
  id: str = None,
  min_days_for_renewal: typing.Union[int, float] = None,
  requested_validity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.csr">csr</a></code> | <code>str</code> | The Certificate Signing Request. Must be newline-encoded. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | A list of hostnames or wildcard names bound to the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestType">request_type</a></code> | <code>str</code> | The signature type desired on the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#id OriginCaCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.minDaysForRenewal">min_days_for_renewal</a></code> | <code>typing.Union[int, float]</code> | Number of days prior to the expiry to trigger a renewal of the certificate if a Terraform operation is run. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestedValidity">requested_validity</a></code> | <code>typing.Union[int, float]</code> | The number of days for which the certificate should be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.csr"></a>

- *Type:* str

The Certificate Signing Request. Must be newline-encoded. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.hostnames"></a>

- *Type:* typing.List[str]

A list of hostnames or wildcard names bound to the certificate.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestType"></a>

- *Type:* str

The signature type desired on the certificate.

Available values: `origin-rsa`, `origin-ecc`, `keyless-certificate`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#id OriginCaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_days_for_renewal`<sup>Optional</sup> <a name="min_days_for_renewal" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.minDaysForRenewal"></a>

- *Type:* typing.Union[int, float]

Number of days prior to the expiry to trigger a renewal of the certificate if a Terraform operation is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#min_days_for_renewal OriginCaCertificate#min_days_for_renewal}

---

##### `requested_validity`<sup>Optional</sup> <a name="requested_validity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestedValidity"></a>

- *Type:* typing.Union[int, float]

The number of days for which the certificate should be valid.

Available values: `7`, `30`, `90`, `365`, `730`, `1095`, `5475`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetMinDaysForRenewal">reset_min_days_for_renewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestedValidity">reset_requested_validity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_days_for_renewal` <a name="reset_min_days_for_renewal" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetMinDaysForRenewal"></a>

```python
def reset_min_days_for_renewal() -> None
```

##### `reset_requested_validity` <a name="reset_requested_validity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestedValidity"></a>

```python
def reset_requested_validity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import origin_ca_certificate

originCaCertificate.OriginCaCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import origin_ca_certificate

originCaCertificate.OriginCaCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import origin_ca_certificate

originCaCertificate.OriginCaCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csrInput">csr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.minDaysForRenewalInput">min_days_for_renewal_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidityInput">requested_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.minDaysForRenewal">min_days_for_renewal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidity">requested_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `csr_input`<sup>Optional</sup> <a name="csr_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csrInput"></a>

```python
csr_input: str
```

- *Type:* str

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_days_for_renewal_input`<sup>Optional</sup> <a name="min_days_for_renewal_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.minDaysForRenewalInput"></a>

```python
min_days_for_renewal_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_validity_input`<sup>Optional</sup> <a name="requested_validity_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidityInput"></a>

```python
requested_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_days_for_renewal`<sup>Required</sup> <a name="min_days_for_renewal" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.minDaysForRenewal"></a>

```python
min_days_for_renewal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_validity`<sup>Required</sup> <a name="requested_validity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidity"></a>

```python
requested_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OriginCaCertificateConfig <a name="OriginCaCertificateConfig" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import origin_ca_certificate

originCaCertificate.OriginCaCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  csr: str,
  hostnames: typing.List[str],
  request_type: str,
  id: str = None,
  min_days_for_renewal: typing.Union[int, float] = None,
  requested_validity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.csr">csr</a></code> | <code>str</code> | The Certificate Signing Request. Must be newline-encoded. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | A list of hostnames or wildcard names bound to the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestType">request_type</a></code> | <code>str</code> | The signature type desired on the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#id OriginCaCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.minDaysForRenewal">min_days_for_renewal</a></code> | <code>typing.Union[int, float]</code> | Number of days prior to the expiry to trigger a renewal of the certificate if a Terraform operation is run. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestedValidity">requested_validity</a></code> | <code>typing.Union[int, float]</code> | The number of days for which the certificate should be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.csr"></a>

```python
csr: str
```

- *Type:* str

The Certificate Signing Request. Must be newline-encoded. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

A list of hostnames or wildcard names bound to the certificate.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

The signature type desired on the certificate.

Available values: `origin-rsa`, `origin-ecc`, `keyless-certificate`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#id OriginCaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_days_for_renewal`<sup>Optional</sup> <a name="min_days_for_renewal" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.minDaysForRenewal"></a>

```python
min_days_for_renewal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days prior to the expiry to trigger a renewal of the certificate if a Terraform operation is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#min_days_for_renewal OriginCaCertificate#min_days_for_renewal}

---

##### `requested_validity`<sup>Optional</sup> <a name="requested_validity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestedValidity"></a>

```python
requested_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days for which the certificate should be valid.

Available values: `7`, `30`, `90`, `365`, `730`, `1095`, `5475`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}

---



