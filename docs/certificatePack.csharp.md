# `cloudflare_certificate_pack`

Refer to the Terraform Registory for docs: [`cloudflare_certificate_pack`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack).

# `certificatePack` Submodule <a name="`certificatePack` Submodule" id="@cdktf/provider-cloudflare.certificatePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatePack <a name="CertificatePack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack cloudflare_certificate_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePack(Construct Scope, string Id, CertificatePackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig">CertificatePackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig">CertificatePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors">PutValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords">PutValidationRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding">ResetCloudflareBranding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationErrors">ResetValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationRecords">ResetValidationRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetWaitForActiveStatus">ResetWaitForActiveStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutValidationErrors` <a name="PutValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors"></a>

```csharp
private void PutValidationErrors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors.parameter.value"></a>

- *Type:* object

---

##### `PutValidationRecords` <a name="PutValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords"></a>

```csharp
private void PutValidationRecords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords.parameter.value"></a>

- *Type:* object

---

##### `ResetCloudflareBranding` <a name="ResetCloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding"></a>

```csharp
private void ResetCloudflareBranding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetValidationErrors` <a name="ResetValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationErrors"></a>

```csharp
private void ResetValidationErrors()
```

##### `ResetValidationRecords` <a name="ResetValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationRecords"></a>

```csharp
private void ResetValidationRecords()
```

##### `ResetWaitForActiveStatus` <a name="ResetWaitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetWaitForActiveStatus"></a>

```csharp
private void ResetWaitForActiveStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CertificatePack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CertificatePack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CertificatePack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrors">ValidationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList">CertificatePackValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecords">ValidationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList">CertificatePackValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBrandingInput">CloudflareBrandingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrorsInput">ValidationErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput">ValidationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecordsInput">ValidationRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput">ValidityDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatusInput">WaitForActiveStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBranding">CloudflareBranding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethod">ValidationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDays">ValidityDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatus">WaitForActiveStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ValidationErrors`<sup>Required</sup> <a name="ValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrors"></a>

```csharp
public CertificatePackValidationErrorsList ValidationErrors { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList">CertificatePackValidationErrorsList</a>

---

##### `ValidationRecords`<sup>Required</sup> <a name="ValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecords"></a>

```csharp
public CertificatePackValidationRecordsList ValidationRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList">CertificatePackValidationRecordsList</a>

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthorityInput"></a>

```csharp
public string CertificateAuthorityInput { get; }
```

- *Type:* string

---

##### `CloudflareBrandingInput`<sup>Optional</sup> <a name="CloudflareBrandingInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBrandingInput"></a>

```csharp
public object CloudflareBrandingInput { get; }
```

- *Type:* object

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidationErrorsInput`<sup>Optional</sup> <a name="ValidationErrorsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrorsInput"></a>

```csharp
public object ValidationErrorsInput { get; }
```

- *Type:* object

---

##### `ValidationMethodInput`<sup>Optional</sup> <a name="ValidationMethodInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput"></a>

```csharp
public string ValidationMethodInput { get; }
```

- *Type:* string

---

##### `ValidationRecordsInput`<sup>Optional</sup> <a name="ValidationRecordsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecordsInput"></a>

```csharp
public object ValidationRecordsInput { get; }
```

- *Type:* object

---

##### `ValidityDaysInput`<sup>Optional</sup> <a name="ValidityDaysInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput"></a>

```csharp
public double ValidityDaysInput { get; }
```

- *Type:* double

---

##### `WaitForActiveStatusInput`<sup>Optional</sup> <a name="WaitForActiveStatusInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatusInput"></a>

```csharp
public object WaitForActiveStatusInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; }
```

- *Type:* string

---

##### `CloudflareBranding`<sup>Required</sup> <a name="CloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBranding"></a>

```csharp
public object CloudflareBranding { get; }
```

- *Type:* object

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidationMethod`<sup>Required</sup> <a name="ValidationMethod" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethod"></a>

```csharp
public string ValidationMethod { get; }
```

- *Type:* string

---

##### `ValidityDays`<sup>Required</sup> <a name="ValidityDays" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDays"></a>

```csharp
public double ValidityDays { get; }
```

- *Type:* double

---

##### `WaitForActiveStatus`<sup>Required</sup> <a name="WaitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatus"></a>

```csharp
public object WaitForActiveStatus { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatePackConfig <a name="CertificatePackConfig" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateAuthority,
    string[] Hosts,
    string Type,
    string ValidationMethod,
    double ValidityDays,
    string ZoneId,
    object CloudflareBranding = null,
    string Id = null,
    object ValidationErrors = null,
    object ValidationRecords = null,
    object WaitForActiveStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | Which certificate authority to issue the certificate pack. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts">Hosts</a></code> | <code>string[]</code> | List of hostnames to provision the certificate pack for. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type">Type</a></code> | <code>string</code> | Certificate pack configuration type. Available values: `advanced`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod">ValidationMethod</a></code> | <code>string</code> | Which validation method to use in order to prove domain ownership. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays">ValidityDays</a></code> | <code>double</code> | How long the certificate is valid for. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding">CloudflareBranding</a></code> | <code>object</code> | Whether or not to include Cloudflare branding. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#id CertificatePack#id}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationErrors">ValidationErrors</a></code> | <code>object</code> | validation_errors block. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationRecords">ValidationRecords</a></code> | <code>object</code> | validation_records block. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.waitForActiveStatus">WaitForActiveStatus</a></code> | <code>object</code> | Whether or not to wait for a certificate pack to reach status `active` during creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; set; }
```

- *Type:* string

Which certificate authority to issue the certificate pack.

Available values: `digicert`, `lets_encrypt`, `google`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

List of hostnames to provision the certificate pack for.

The zone name must be included as a host. Note: If using Let's Encrypt, you cannot use individual subdomains and only a wildcard for subdomain is available. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#hosts CertificatePack#hosts}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Certificate pack configuration type. Available values: `advanced`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#type CertificatePack#type}

---

##### `ValidationMethod`<sup>Required</sup> <a name="ValidationMethod" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod"></a>

```csharp
public string ValidationMethod { get; set; }
```

- *Type:* string

Which validation method to use in order to prove domain ownership.

Available values: `txt`, `http`, `email`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}

---

##### `ValidityDays`<sup>Required</sup> <a name="ValidityDays" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays"></a>

```csharp
public double ValidityDays { get; set; }
```

- *Type:* double

How long the certificate is valid for.

Note: If using Let's Encrypt, this value can only be 90 days. Available values: `14`, `30`, `90`, `365`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}

---

##### `CloudflareBranding`<sup>Optional</sup> <a name="CloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding"></a>

```csharp
public object CloudflareBranding { get; set; }
```

- *Type:* object

Whether or not to include Cloudflare branding.

This will add `sni.cloudflaressl.com` as the Common Name if set to `true`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#id CertificatePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ValidationErrors`<sup>Optional</sup> <a name="ValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationErrors"></a>

```csharp
public object ValidationErrors { get; set; }
```

- *Type:* object

validation_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#validation_errors CertificatePack#validation_errors}

---

##### `ValidationRecords`<sup>Optional</sup> <a name="ValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationRecords"></a>

```csharp
public object ValidationRecords { get; set; }
```

- *Type:* object

validation_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#validation_records CertificatePack#validation_records}

---

##### `WaitForActiveStatus`<sup>Optional</sup> <a name="WaitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.waitForActiveStatus"></a>

```csharp
public object WaitForActiveStatus { get; set; }
```

- *Type:* object

Whether or not to wait for a certificate pack to reach status `active` during creation.

Defaults to `false`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#wait_for_active_status CertificatePack#wait_for_active_status}

---

### CertificatePackValidationErrors <a name="CertificatePackValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationErrors {

};
```


### CertificatePackValidationRecords <a name="CertificatePackValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationRecords {
    string CnameName = null,
    string CnameTarget = null,
    string[] Emails = null,
    string HttpBody = null,
    string HttpUrl = null,
    string TxtName = null,
    string TxtValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameName">CnameName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#cname_name CertificatePack#cname_name}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameTarget">CnameTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#cname_target CertificatePack#cname_target}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.emails">Emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#emails CertificatePack#emails}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpBody">HttpBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#http_body CertificatePack#http_body}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpUrl">HttpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#http_url CertificatePack#http_url}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtName">TxtName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#txt_name CertificatePack#txt_name}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtValue">TxtValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#txt_value CertificatePack#txt_value}. |

---

##### `CnameName`<sup>Optional</sup> <a name="CnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameName"></a>

```csharp
public string CnameName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#cname_name CertificatePack#cname_name}.

---

##### `CnameTarget`<sup>Optional</sup> <a name="CnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameTarget"></a>

```csharp
public string CnameTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#cname_target CertificatePack#cname_target}.

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.emails"></a>

```csharp
public string[] Emails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#emails CertificatePack#emails}.

---

##### `HttpBody`<sup>Optional</sup> <a name="HttpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpBody"></a>

```csharp
public string HttpBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#http_body CertificatePack#http_body}.

---

##### `HttpUrl`<sup>Optional</sup> <a name="HttpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpUrl"></a>

```csharp
public string HttpUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#http_url CertificatePack#http_url}.

---

##### `TxtName`<sup>Optional</sup> <a name="TxtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtName"></a>

```csharp
public string TxtName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#txt_name CertificatePack#txt_name}.

---

##### `TxtValue`<sup>Optional</sup> <a name="TxtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtValue"></a>

```csharp
public string TxtValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/certificate_pack#txt_value CertificatePack#txt_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatePackValidationErrorsList <a name="CertificatePackValidationErrorsList" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get"></a>

```csharp
private CertificatePackValidationErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatePackValidationErrorsOutputReference <a name="CertificatePackValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatePackValidationRecordsList <a name="CertificatePackValidationRecordsList" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get"></a>

```csharp
private CertificatePackValidationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatePackValidationRecordsOutputReference <a name="CertificatePackValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CertificatePackValidationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameName">ResetCnameName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameTarget">ResetCnameTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpBody">ResetHttpBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpUrl">ResetHttpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtName">ResetTxtName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtValue">ResetTxtValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCnameName` <a name="ResetCnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameName"></a>

```csharp
private void ResetCnameName()
```

##### `ResetCnameTarget` <a name="ResetCnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameTarget"></a>

```csharp
private void ResetCnameTarget()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetEmails"></a>

```csharp
private void ResetEmails()
```

##### `ResetHttpBody` <a name="ResetHttpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpBody"></a>

```csharp
private void ResetHttpBody()
```

##### `ResetHttpUrl` <a name="ResetHttpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpUrl"></a>

```csharp
private void ResetHttpUrl()
```

##### `ResetTxtName` <a name="ResetTxtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtName"></a>

```csharp
private void ResetTxtName()
```

##### `ResetTxtValue` <a name="ResetTxtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtValue"></a>

```csharp
private void ResetTxtValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameNameInput">CnameNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTargetInput">CnameTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emailsInput">EmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBodyInput">HttpBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrlInput">HttpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtNameInput">TxtNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValueInput">TxtValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameName">CnameName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTarget">CnameTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emails">Emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBody">HttpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtName">TxtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValue">TxtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CnameNameInput`<sup>Optional</sup> <a name="CnameNameInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameNameInput"></a>

```csharp
public string CnameNameInput { get; }
```

- *Type:* string

---

##### `CnameTargetInput`<sup>Optional</sup> <a name="CnameTargetInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTargetInput"></a>

```csharp
public string CnameTargetInput { get; }
```

- *Type:* string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emailsInput"></a>

```csharp
public string[] EmailsInput { get; }
```

- *Type:* string[]

---

##### `HttpBodyInput`<sup>Optional</sup> <a name="HttpBodyInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBodyInput"></a>

```csharp
public string HttpBodyInput { get; }
```

- *Type:* string

---

##### `HttpUrlInput`<sup>Optional</sup> <a name="HttpUrlInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrlInput"></a>

```csharp
public string HttpUrlInput { get; }
```

- *Type:* string

---

##### `TxtNameInput`<sup>Optional</sup> <a name="TxtNameInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtNameInput"></a>

```csharp
public string TxtNameInput { get; }
```

- *Type:* string

---

##### `TxtValueInput`<sup>Optional</sup> <a name="TxtValueInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValueInput"></a>

```csharp
public string TxtValueInput { get; }
```

- *Type:* string

---

##### `CnameName`<sup>Required</sup> <a name="CnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameName"></a>

```csharp
public string CnameName { get; }
```

- *Type:* string

---

##### `CnameTarget`<sup>Required</sup> <a name="CnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTarget"></a>

```csharp
public string CnameTarget { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emails"></a>

```csharp
public string[] Emails { get; }
```

- *Type:* string[]

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBody"></a>

```csharp
public string HttpBody { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `TxtName`<sup>Required</sup> <a name="TxtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtName"></a>

```csharp
public string TxtName { get; }
```

- *Type:* string

---

##### `TxtValue`<sup>Required</sup> <a name="TxtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValue"></a>

```csharp
public string TxtValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



