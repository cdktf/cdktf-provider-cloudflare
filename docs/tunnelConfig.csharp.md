# `cloudflare_tunnel_config`

Refer to the Terraform Registory for docs: [`cloudflare_tunnel_config`](https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config).

# `tunnelConfig` Submodule <a name="`tunnelConfig` Submodule" id="@cdktf/provider-cloudflare.tunnelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TunnelConfig <a name="TunnelConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config cloudflare_tunnel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfig(Construct Scope, string Id, TunnelConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig"></a>

```csharp
private void PutConfig(TunnelConfigConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TunnelConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TunnelConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TunnelConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config"></a>

```csharp
public TunnelConfigConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput"></a>

```csharp
public TunnelConfigConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TunnelConfigConfig <a name="TunnelConfigConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    TunnelConfigConfigA Config,
    string TunnelId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#account_id TunnelConfig#account_id}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config"></a>

```csharp
public TunnelConfigConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#config TunnelConfig#config}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tunnel_id TunnelConfig#tunnel_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TunnelConfigConfigA <a name="TunnelConfigConfigA" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigA {
    object IngressRule,
    TunnelConfigConfigOriginRequest OriginRequest = null,
    TunnelConfigConfigWarpRouting WarpRouting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule">IngressRule</a></code> | <code>object</code> | ingress_rule block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting">WarpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | warp_routing block. |

---

##### `IngressRule`<sup>Required</sup> <a name="IngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule"></a>

```csharp
public object IngressRule { get; set; }
```

- *Type:* object

ingress_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ingress_rule TunnelConfig#ingress_rule}

---

##### `OriginRequest`<sup>Optional</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest"></a>

```csharp
public TunnelConfigConfigOriginRequest OriginRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_request TunnelConfig#origin_request}

---

##### `WarpRouting`<sup>Optional</sup> <a name="WarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting"></a>

```csharp
public TunnelConfigConfigWarpRouting WarpRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#warp_routing TunnelConfig#warp_routing}

---

### TunnelConfigConfigIngressRule <a name="TunnelConfigConfigIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigIngressRule {
    string Service,
    string Hostname = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service">Service</a></code> | <code>string</code> | Name of the service to which the request will be sent. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname">Hostname</a></code> | <code>string</code> | Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path">Path</a></code> | <code>string</code> | Path of the incoming request. If the path matches, the request will be sent to the local service. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of the service to which the request will be sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#service TunnelConfig#service}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#hostname TunnelConfig#hostname}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the incoming request. If the path matches, the request will be sent to the local service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#path TunnelConfig#path}

---

### TunnelConfigConfigOriginRequest <a name="TunnelConfigConfigOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigOriginRequest {
    object BastionMode = null,
    string CaPool = null,
    string ConnectTimeout = null,
    object DisableChunkedEncoding = null,
    string HttpHostHeader = null,
    object IpRules = null,
    double KeepAliveConnections = null,
    string KeepAliveTimeout = null,
    object NoHappyEyeballs = null,
    object NoTlsVerify = null,
    string OriginServerName = null,
    string ProxyAddress = null,
    double ProxyPort = null,
    string ProxyType = null,
    string TcpKeepAlive = null,
    string TlsTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode">BastionMode</a></code> | <code>object</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool">CaPool</a></code> | <code>string</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>object</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader">HttpHostHeader</a></code> | <code>string</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules">IpRules</a></code> | <code>object</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>double</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>string</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>object</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify">NoTlsVerify</a></code> | <code>object</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName">OriginServerName</a></code> | <code>string</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress">ProxyAddress</a></code> | <code>string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort">ProxyPort</a></code> | <code>double</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType">ProxyType</a></code> | <code>string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>string</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout">TlsTimeout</a></code> | <code>string</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `BastionMode`<sup>Optional</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode"></a>

```csharp
public object BastionMode { get; set; }
```

- *Type:* object

Runs as jump host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#bastion_mode TunnelConfig#bastion_mode}

---

##### `CaPool`<sup>Optional</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ca_pool TunnelConfig#ca_pool}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; set; }
```

- *Type:* string

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#connect_timeout TunnelConfig#connect_timeout}

---

##### `DisableChunkedEncoding`<sup>Optional</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding"></a>

```csharp
public object DisableChunkedEncoding { get; set; }
```

- *Type:* object

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#disable_chunked_encoding TunnelConfig#disable_chunked_encoding}

---

##### `HttpHostHeader`<sup>Optional</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader"></a>

```csharp
public string HttpHostHeader { get; set; }
```

- *Type:* string

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#http_host_header TunnelConfig#http_host_header}

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules"></a>

```csharp
public object IpRules { get; set; }
```

- *Type:* object

ip_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ip_rules TunnelConfig#ip_rules}

---

##### `KeepAliveConnections`<sup>Optional</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections"></a>

```csharp
public double KeepAliveConnections { get; set; }
```

- *Type:* double

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_connections TunnelConfig#keep_alive_connections}

---

##### `KeepAliveTimeout`<sup>Optional</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout"></a>

```csharp
public string KeepAliveTimeout { get; set; }
```

- *Type:* string

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_timeout TunnelConfig#keep_alive_timeout}

---

##### `NoHappyEyeballs`<sup>Optional</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs"></a>

```csharp
public object NoHappyEyeballs { get; set; }
```

- *Type:* object

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_happy_eyeballs TunnelConfig#no_happy_eyeballs}

---

##### `NoTlsVerify`<sup>Optional</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify"></a>

```csharp
public object NoTlsVerify { get; set; }
```

- *Type:* object

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_tls_verify TunnelConfig#no_tls_verify}

---

##### `OriginServerName`<sup>Optional</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName"></a>

```csharp
public string OriginServerName { get; set; }
```

- *Type:* string

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_server_name TunnelConfig#origin_server_name}

---

##### `ProxyAddress`<sup>Optional</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress"></a>

```csharp
public string ProxyAddress { get; set; }
```

- *Type:* string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_address TunnelConfig#proxy_address}

---

##### `ProxyPort`<sup>Optional</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort"></a>

```csharp
public double ProxyPort { get; set; }
```

- *Type:* double

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_port TunnelConfig#proxy_port}

---

##### `ProxyType`<sup>Optional</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType"></a>

```csharp
public string ProxyType { get; set; }
```

- *Type:* string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: ``, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_type TunnelConfig#proxy_type}

---

##### `TcpKeepAlive`<sup>Optional</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive"></a>

```csharp
public string TcpKeepAlive { get; set; }
```

- *Type:* string

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tcp_keep_alive TunnelConfig#tcp_keep_alive}

---

##### `TlsTimeout`<sup>Optional</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout"></a>

```csharp
public string TlsTimeout { get; set; }
```

- *Type:* string

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tls_timeout TunnelConfig#tls_timeout}

---

### TunnelConfigConfigOriginRequestIpRules <a name="TunnelConfigConfigOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigOriginRequestIpRules {
    object Allow = null,
    double[] Ports = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow">Allow</a></code> | <code>object</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports">Ports</a></code> | <code>double[]</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix">Prefix</a></code> | <code>string</code> | IP rule prefix. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow"></a>

```csharp
public object Allow { get; set; }
```

- *Type:* object

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#allow TunnelConfig#allow}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ports TunnelConfig#ports}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

IP rule prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#prefix TunnelConfig#prefix}

---

### TunnelConfigConfigWarpRouting <a name="TunnelConfigConfigWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigWarpRouting {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled">Enabled</a></code> | <code>object</code> | Whether WARP routing is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#enabled TunnelConfig#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### TunnelConfigConfigAOutputReference <a name="TunnelConfigConfigAOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule">PutIngressRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest">PutOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting">PutWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest">ResetOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting">ResetWarpRouting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngressRule` <a name="PutIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule"></a>

```csharp
private void PutIngressRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule.parameter.value"></a>

- *Type:* object

---

##### `PutOriginRequest` <a name="PutOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest"></a>

```csharp
private void PutOriginRequest(TunnelConfigConfigOriginRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `PutWarpRouting` <a name="PutWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting"></a>

```csharp
private void PutWarpRouting(TunnelConfigConfigWarpRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `ResetOriginRequest` <a name="ResetOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest"></a>

```csharp
private void ResetOriginRequest()
```

##### `ResetWarpRouting` <a name="ResetWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting"></a>

```csharp
private void ResetWarpRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule">IngressRule</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting">WarpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput">IngressRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput">OriginRequestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput">WarpRoutingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressRule`<sup>Required</sup> <a name="IngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule"></a>

```csharp
public TunnelConfigConfigIngressRuleList IngressRule { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a>

---

##### `OriginRequest`<sup>Required</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest"></a>

```csharp
public TunnelConfigConfigOriginRequestOutputReference OriginRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a>

---

##### `WarpRouting`<sup>Required</sup> <a name="WarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting"></a>

```csharp
public TunnelConfigConfigWarpRoutingOutputReference WarpRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a>

---

##### `IngressRuleInput`<sup>Optional</sup> <a name="IngressRuleInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput"></a>

```csharp
public object IngressRuleInput { get; }
```

- *Type:* object

---

##### `OriginRequestInput`<sup>Optional</sup> <a name="OriginRequestInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput"></a>

```csharp
public TunnelConfigConfigOriginRequest OriginRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `WarpRoutingInput`<sup>Optional</sup> <a name="WarpRoutingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput"></a>

```csharp
public TunnelConfigConfigWarpRouting WarpRoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue"></a>

```csharp
public TunnelConfigConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---


### TunnelConfigConfigIngressRuleList <a name="TunnelConfigConfigIngressRuleList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigIngressRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get"></a>

```csharp
private TunnelConfigConfigIngressRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TunnelConfigConfigIngressRuleOutputReference <a name="TunnelConfigConfigIngressRuleOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigIngressRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TunnelConfigConfigOriginRequestIpRulesList <a name="TunnelConfigConfigOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigOriginRequestIpRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get"></a>

```csharp
private TunnelConfigConfigOriginRequestIpRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TunnelConfigConfigOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigOriginRequestIpRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput">AllowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow">Allow</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput"></a>

```csharp
public object AllowInput { get; }
```

- *Type:* object

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow"></a>

```csharp
public object Allow { get; }
```

- *Type:* object

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TunnelConfigConfigOriginRequestOutputReference <a name="TunnelConfigConfigOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigOriginRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules">PutIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode">ResetBastionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool">ResetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding">ResetDisableChunkedEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader">ResetHttpHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections">ResetKeepAliveConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout">ResetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs">ResetNoHappyEyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify">ResetNoTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName">ResetOriginServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress">ResetProxyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort">ResetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType">ResetProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive">ResetTcpKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout">ResetTlsTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRules` <a name="PutIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules"></a>

```csharp
private void PutIpRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* object

---

##### `ResetBastionMode` <a name="ResetBastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode"></a>

```csharp
private void ResetBastionMode()
```

##### `ResetCaPool` <a name="ResetCaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool"></a>

```csharp
private void ResetCaPool()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetDisableChunkedEncoding` <a name="ResetDisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```csharp
private void ResetDisableChunkedEncoding()
```

##### `ResetHttpHostHeader` <a name="ResetHttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader"></a>

```csharp
private void ResetHttpHostHeader()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules"></a>

```csharp
private void ResetIpRules()
```

##### `ResetKeepAliveConnections` <a name="ResetKeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections"></a>

```csharp
private void ResetKeepAliveConnections()
```

##### `ResetKeepAliveTimeout` <a name="ResetKeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```csharp
private void ResetKeepAliveTimeout()
```

##### `ResetNoHappyEyeballs` <a name="ResetNoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```csharp
private void ResetNoHappyEyeballs()
```

##### `ResetNoTlsVerify` <a name="ResetNoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify"></a>

```csharp
private void ResetNoTlsVerify()
```

##### `ResetOriginServerName` <a name="ResetOriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName"></a>

```csharp
private void ResetOriginServerName()
```

##### `ResetProxyAddress` <a name="ResetProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress"></a>

```csharp
private void ResetProxyAddress()
```

##### `ResetProxyPort` <a name="ResetProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort"></a>

```csharp
private void ResetProxyPort()
```

##### `ResetProxyType` <a name="ResetProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType"></a>

```csharp
private void ResetProxyType()
```

##### `ResetTcpKeepAlive` <a name="ResetTcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive"></a>

```csharp
private void ResetTcpKeepAlive()
```

##### `ResetTlsTimeout` <a name="ResetTlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout"></a>

```csharp
private void ResetTlsTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules">IpRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput">BastionModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput">DisableChunkedEncodingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput">HttpHostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput">KeepAliveConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput">KeepAliveTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput">NoHappyEyeballsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput">NoTlsVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput">OriginServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput">ProxyAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput">ProxyPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput">ProxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput">TcpKeepAliveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput">TlsTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode">BastionMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader">HttpHostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify">NoTlsVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName">OriginServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress">ProxyAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort">ProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType">ProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout">TlsTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules"></a>

```csharp
public TunnelConfigConfigOriginRequestIpRulesList IpRules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a>

---

##### `BastionModeInput`<sup>Optional</sup> <a name="BastionModeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput"></a>

```csharp
public object BastionModeInput { get; }
```

- *Type:* object

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput"></a>

```csharp
public string ConnectTimeoutInput { get; }
```

- *Type:* string

---

##### `DisableChunkedEncodingInput`<sup>Optional</sup> <a name="DisableChunkedEncodingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```csharp
public object DisableChunkedEncodingInput { get; }
```

- *Type:* object

---

##### `HttpHostHeaderInput`<sup>Optional</sup> <a name="HttpHostHeaderInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```csharp
public string HttpHostHeaderInput { get; }
```

- *Type:* string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput"></a>

```csharp
public object IpRulesInput { get; }
```

- *Type:* object

---

##### `KeepAliveConnectionsInput`<sup>Optional</sup> <a name="KeepAliveConnectionsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```csharp
public double KeepAliveConnectionsInput { get; }
```

- *Type:* double

---

##### `KeepAliveTimeoutInput`<sup>Optional</sup> <a name="KeepAliveTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```csharp
public string KeepAliveTimeoutInput { get; }
```

- *Type:* string

---

##### `NoHappyEyeballsInput`<sup>Optional</sup> <a name="NoHappyEyeballsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```csharp
public object NoHappyEyeballsInput { get; }
```

- *Type:* object

---

##### `NoTlsVerifyInput`<sup>Optional</sup> <a name="NoTlsVerifyInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```csharp
public object NoTlsVerifyInput { get; }
```

- *Type:* object

---

##### `OriginServerNameInput`<sup>Optional</sup> <a name="OriginServerNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput"></a>

```csharp
public string OriginServerNameInput { get; }
```

- *Type:* string

---

##### `ProxyAddressInput`<sup>Optional</sup> <a name="ProxyAddressInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput"></a>

```csharp
public string ProxyAddressInput { get; }
```

- *Type:* string

---

##### `ProxyPortInput`<sup>Optional</sup> <a name="ProxyPortInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput"></a>

```csharp
public double ProxyPortInput { get; }
```

- *Type:* double

---

##### `ProxyTypeInput`<sup>Optional</sup> <a name="ProxyTypeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput"></a>

```csharp
public string ProxyTypeInput { get; }
```

- *Type:* string

---

##### `TcpKeepAliveInput`<sup>Optional</sup> <a name="TcpKeepAliveInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```csharp
public string TcpKeepAliveInput { get; }
```

- *Type:* string

---

##### `TlsTimeoutInput`<sup>Optional</sup> <a name="TlsTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```csharp
public string TlsTimeoutInput { get; }
```

- *Type:* string

---

##### `BastionMode`<sup>Required</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode"></a>

```csharp
public object BastionMode { get; }
```

- *Type:* object

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; }
```

- *Type:* string

---

##### `DisableChunkedEncoding`<sup>Required</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```csharp
public object DisableChunkedEncoding { get; }
```

- *Type:* object

---

##### `HttpHostHeader`<sup>Required</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader"></a>

```csharp
public string HttpHostHeader { get; }
```

- *Type:* string

---

##### `KeepAliveConnections`<sup>Required</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections"></a>

```csharp
public double KeepAliveConnections { get; }
```

- *Type:* double

---

##### `KeepAliveTimeout`<sup>Required</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout"></a>

```csharp
public string KeepAliveTimeout { get; }
```

- *Type:* string

---

##### `NoHappyEyeballs`<sup>Required</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs"></a>

```csharp
public object NoHappyEyeballs { get; }
```

- *Type:* object

---

##### `NoTlsVerify`<sup>Required</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify"></a>

```csharp
public object NoTlsVerify { get; }
```

- *Type:* object

---

##### `OriginServerName`<sup>Required</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName"></a>

```csharp
public string OriginServerName { get; }
```

- *Type:* string

---

##### `ProxyAddress`<sup>Required</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress"></a>

```csharp
public string ProxyAddress { get; }
```

- *Type:* string

---

##### `ProxyPort`<sup>Required</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort"></a>

```csharp
public double ProxyPort { get; }
```

- *Type:* double

---

##### `ProxyType`<sup>Required</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType"></a>

```csharp
public string ProxyType { get; }
```

- *Type:* string

---

##### `TcpKeepAlive`<sup>Required</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive"></a>

```csharp
public string TcpKeepAlive { get; }
```

- *Type:* string

---

##### `TlsTimeout`<sup>Required</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout"></a>

```csharp
public string TlsTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue"></a>

```csharp
public TunnelConfigConfigOriginRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---


### TunnelConfigConfigWarpRoutingOutputReference <a name="TunnelConfigConfigWarpRoutingOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TunnelConfigConfigWarpRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue"></a>

```csharp
public TunnelConfigConfigWarpRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---



