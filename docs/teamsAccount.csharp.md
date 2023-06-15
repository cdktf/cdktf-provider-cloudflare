# `cloudflare_teams_account`

Refer to the Terraform Registory for docs: [`cloudflare_teams_account`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account).

# `teamsAccount` Submodule <a name="`teamsAccount` Submodule" id="@cdktf/provider-cloudflare.teamsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsAccount <a name="TeamsAccount" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account cloudflare_teams_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccount(Construct Scope, string Id, TeamsAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus">PutAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips">PutFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog">PutPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus">ResetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips">ResetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog">ResetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled">ResetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled">ResetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus"></a>

```csharp
private void PutAntivirus(TeamsAccountAntivirus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage"></a>

```csharp
private void PutBlockPage(TeamsAccountBlockPage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips"></a>

```csharp
private void PutFips(TeamsAccountFips Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging"></a>

```csharp
private void PutLogging(TeamsAccountLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog"></a>

```csharp
private void PutPayloadLog(TeamsAccountPayloadLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy"></a>

```csharp
private void PutProxy(TeamsAccountProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled"></a>

```csharp
private void ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus"></a>

```csharp
private void ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage"></a>

```csharp
private void ResetBlockPage()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips"></a>

```csharp
private void ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog"></a>

```csharp
private void ResetPayloadLog()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy"></a>

```csharp
private void ResetProxy()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled"></a>

```csharp
private void ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled"></a>

```csharp
private void ResetUrlBrowserIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus"></a>

```csharp
public TeamsAccountAntivirusOutputReference Antivirus { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage"></a>

```csharp
public TeamsAccountBlockPageOutputReference BlockPage { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips"></a>

```csharp
public TeamsAccountFipsOutputReference Fips { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging"></a>

```csharp
public TeamsAccountLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog"></a>

```csharp
public TeamsAccountPayloadLogOutputReference PayloadLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy"></a>

```csharp
public TeamsAccountProxyOutputReference Proxy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput"></a>

```csharp
public object ActivityLogEnabledInput { get; }
```

- *Type:* object

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput"></a>

```csharp
public TeamsAccountAntivirus AntivirusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput"></a>

```csharp
public TeamsAccountBlockPage BlockPageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput"></a>

```csharp
public TeamsAccountFips FipsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput"></a>

```csharp
public TeamsAccountLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput"></a>

```csharp
public TeamsAccountPayloadLog PayloadLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput"></a>

```csharp
public TeamsAccountProxy ProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput"></a>

```csharp
public object TlsDecryptEnabledInput { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput"></a>

```csharp
public object UrlBrowserIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsAccountAntivirus <a name="TeamsAccountAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirus {
    object EnabledDownloadPhase,
    object EnabledUploadPhase,
    object FailClosed
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed">FailClosed</a></code> | <code>object</code> | Block requests for files that cannot be scanned. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; set; }
```

- *Type:* object

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; set; }
```

- *Type:* object

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed"></a>

```csharp
public object FailClosed { get; set; }
```

- *Type:* object

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}

---

### TeamsAccountBlockPage <a name="TeamsAccountBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBlockPage {
    string BackgroundColor = null,
    object Enabled = null,
    string FooterText = null,
    string HeaderText = null,
    string LogoPath = null,
    string MailtoAddress = null,
    string MailtoSubject = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled">Enabled</a></code> | <code>object</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText">FooterText</a></code> | <code>string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText">HeaderText</a></code> | <code>string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath">LogoPath</a></code> | <code>string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name">Name</a></code> | <code>string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#background_color TeamsAccount#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#header_text TeamsAccount#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; set; }
```

- *Type:* string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; set; }
```

- *Type:* string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#name TeamsAccount#name}

---

### TeamsAccountConfig <a name="TeamsAccountConfig" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object ActivityLogEnabled = null,
    TeamsAccountAntivirus Antivirus = null,
    TeamsAccountBlockPage BlockPage = null,
    TeamsAccountFips Fips = null,
    string Id = null,
    TeamsAccountLogging Logging = null,
    TeamsAccountPayloadLog PayloadLog = null,
    TeamsAccountProxy Proxy = null,
    object TlsDecryptEnabled = null,
    object UrlBrowserIsolationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | Safely browse websites in Browser Isolation through a URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#account_id TeamsAccount#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; set; }
```

- *Type:* object

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus"></a>

```csharp
public TeamsAccountAntivirus Antivirus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage"></a>

```csharp
public TeamsAccountBlockPage BlockPage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#block_page TeamsAccount#block_page}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips"></a>

```csharp
public TeamsAccountFips Fips { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#fips TeamsAccount#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging"></a>

```csharp
public TeamsAccountLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#logging TeamsAccount#logging}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog"></a>

```csharp
public TeamsAccountPayloadLog PayloadLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy"></a>

```csharp
public TeamsAccountProxy Proxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#proxy TeamsAccount#proxy}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; set; }
```

- *Type:* object

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; set; }
```

- *Type:* object

Safely browse websites in Browser Isolation through a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

### TeamsAccountFips <a name="TeamsAccountFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountFips {
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls">Tls</a></code> | <code>object</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#tls TeamsAccount#tls}

---

### TeamsAccountLogging <a name="TeamsAccountLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLogging {
    object RedactPii,
    TeamsAccountLoggingSettingsByRuleType SettingsByRuleType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii">RedactPii</a></code> | <code>object</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii"></a>

```csharp
public object RedactPii { get; set; }
```

- *Type:* object

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType SettingsByRuleType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

### TeamsAccountLoggingSettingsByRuleType <a name="TeamsAccountLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleType {
    TeamsAccountLoggingSettingsByRuleTypeDns Dns,
    TeamsAccountLoggingSettingsByRuleTypeHttp Http,
    TeamsAccountLoggingSettingsByRuleTypeL4 L4
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#dns TeamsAccount#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp Http { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#http TeamsAccount#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 L4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#l4 TeamsAccount#l4}

---

### TeamsAccountLoggingSettingsByRuleTypeDns <a name="TeamsAccountLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeDns {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeHttp <a name="TeamsAccountLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeHttp {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeL4 <a name="TeamsAccountLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeL4 {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountPayloadLog <a name="TeamsAccountPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountPayloadLog {
    string PublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key used to encrypt matched payloads. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

### TeamsAccountProxy <a name="TeamsAccountProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountProxy {
    object RootCa,
    object Tcp,
    object Udp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa">RootCa</a></code> | <code>object</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp">Tcp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp">Udp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa"></a>

```csharp
public object RootCa { get; set; }
```

- *Type:* object

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp"></a>

```csharp
public object Tcp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#tcp TeamsAccount#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp"></a>

```csharp
public object Udp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/teams_account#udp TeamsAccount#udp}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsAccountAntivirusOutputReference <a name="TeamsAccountAntivirusOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```csharp
public object EnabledDownloadPhaseInput { get; }
```

- *Type:* object

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```csharp
public object EnabledUploadPhaseInput { get; }
```

- *Type:* object

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput"></a>

```csharp
public object FailClosedInput { get; }
```

- *Type:* object

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; }
```

- *Type:* object

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; }
```

- *Type:* object

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed"></a>

```csharp
public object FailClosed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountAntivirus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---


### TeamsAccountBlockPageOutputReference <a name="TeamsAccountBlockPageOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBlockPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress">ResetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject">ResetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress"></a>

```csharp
private void ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject"></a>

```csharp
private void ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput"></a>

```csharp
public string MailtoAddressInput { get; }
```

- *Type:* string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput"></a>

```csharp
public string MailtoSubjectInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; }
```

- *Type:* string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountBlockPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---


### TeamsAccountFipsOutputReference <a name="TeamsAccountFipsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountFipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountFips InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---


### TeamsAccountLoggingOutputReference <a name="TeamsAccountLoggingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType"></a>

```csharp
private void PutSettingsByRuleType(TeamsAccountLoggingSettingsByRuleType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeOutputReference SettingsByRuleType { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput"></a>

```csharp
public object RedactPiiInput { get; }
```

- *Type:* object

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType SettingsByRuleTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii"></a>

```csharp
public object RedactPii { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---


### TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---


### TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---


### TeamsAccountLoggingSettingsByRuleTypeL4OutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeL4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


### TeamsAccountLoggingSettingsByRuleTypeOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```csharp
private void PutDns(TeamsAccountLoggingSettingsByRuleTypeDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```csharp
private void PutHttp(TeamsAccountLoggingSettingsByRuleTypeHttp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```csharp
private void PutL4(TeamsAccountLoggingSettingsByRuleTypeL4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference Http { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4OutputReference L4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp HttpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 L4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


### TeamsAccountPayloadLogOutputReference <a name="TeamsAccountPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountPayloadLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountPayloadLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---


### TeamsAccountProxyOutputReference <a name="TeamsAccountProxyOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput">RootCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa">RootCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp">Tcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp">Udp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootCaInput`<sup>Optional</sup> <a name="RootCaInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput"></a>

```csharp
public object RootCaInput { get; }
```

- *Type:* object

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput"></a>

```csharp
public object TcpInput { get; }
```

- *Type:* object

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput"></a>

```csharp
public object UdpInput { get; }
```

- *Type:* object

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa"></a>

```csharp
public object RootCa { get; }
```

- *Type:* object

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp"></a>

```csharp
public object Tcp { get; }
```

- *Type:* object

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp"></a>

```csharp
public object Udp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---



