# `zeroTrustGatewayPolicy` Submodule <a name="`zeroTrustGatewayPolicy` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayPolicy <a name="ZeroTrustGatewayPolicy" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicy;

ZeroTrustGatewayPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .action(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .devicePosture(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .expiration(ZeroTrustGatewayPolicyExpiration)
//  .filters(java.util.List<java.lang.String>)
//  .identity(java.lang.String)
//  .precedence(java.lang.Number)
//  .ruleSettings(ZeroTrustGatewayPolicyRuleSettings)
//  .schedule(ZeroTrustGatewayPolicySchedule)
//  .traffic(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The action to preform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | The wirefilter expression used for device posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the rule is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a></code> | The expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | The protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.identity">identity</a></code> | <code>java.lang.String</code> | The wirefilter expression used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | Precedence sets the order of your rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | Additional settings that modify the rule's action. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a></code> | The schedule for activating DNS policies. This does not apply to HTTP or network policies. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.traffic">traffic</a></code> | <code>java.lang.String</code> | The wirefilter expression used for traffic matching. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}.

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action to preform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`.

Available values: "on", "off", "allow", "block", "scan", "noscan", "safesearch", "ytrestricted", "isolate", "noisolate", "override", "l4_override", "egress", "resolve", "quarantine", "redirect".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.devicePosture"></a>

- *Type:* java.lang.String

The wirefilter expression used for device posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.expiration"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a>

The expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any.

This does not apply to HTTP or network policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#expiration ZeroTrustGatewayPolicy#expiration}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.filters"></a>

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic, identity, and device posture expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

The wirefilter expression used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

Precedence sets the order of your rules.

Lower values indicate higher precedence. At each processing phase, applicable rules are evaluated in ascending order of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.ruleSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

Additional settings that modify the rule's action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a>

The schedule for activating DNS policies. This does not apply to HTTP or network policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#schedule ZeroTrustGatewayPolicy#schedule}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.traffic"></a>

- *Type:* java.lang.String

The wirefilter expression used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings">putRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetRuleSettings">resetRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putExpiration"></a>

```java
public void putExpiration(ZeroTrustGatewayPolicyExpiration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a>

---

##### `putRuleSettings` <a name="putRuleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings"></a>

```java
public void putRuleSettings(ZeroTrustGatewayPolicyRuleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putSchedule"></a>

```java
public void putSchedule(ZeroTrustGatewayPolicySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetPrecedence"></a>

```java
public void resetPrecedence()
```

##### `resetRuleSettings` <a name="resetRuleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetRuleSettings"></a>

```java
public void resetRuleSettings()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetTraffic"></a>

```java
public void resetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicy;

ZeroTrustGatewayPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicy;

ZeroTrustGatewayPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicy;

ZeroTrustGatewayPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicy;

ZeroTrustGatewayPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustGatewayPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustGatewayPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustGatewayPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference">ZeroTrustGatewayPolicyExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference">ZeroTrustGatewayPolicyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePostureInput">devicePostureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.expirationInput">expirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filtersInput">filtersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettingsInput">ruleSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.trafficInput">trafficInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.traffic">traffic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.expiration"></a>

```java
public ZeroTrustGatewayPolicyExpirationOutputReference getExpiration();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference">ZeroTrustGatewayPolicyExpirationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ruleSettings`<sup>Required</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettings"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsOutputReference getRuleSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.schedule"></a>

```java
public ZeroTrustGatewayPolicyScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference">ZeroTrustGatewayPolicyScheduleOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePostureInput"></a>

```java
public java.lang.String getDevicePostureInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.expirationInput"></a>

```java
public java.lang.Object getExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filtersInput"></a>

```java
public java.util.List<java.lang.String> getFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `ruleSettingsInput`<sup>Optional</sup> <a name="ruleSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettingsInput"></a>

```java
public java.lang.Object getRuleSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a>

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.trafficInput"></a>

```java
public java.lang.String getTrafficInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePosture"></a>

```java
public java.lang.String getDevicePosture();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.traffic"></a>

```java
public java.lang.String getTraffic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayPolicyConfig <a name="ZeroTrustGatewayPolicyConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyConfig;

ZeroTrustGatewayPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .action(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .devicePosture(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .expiration(ZeroTrustGatewayPolicyExpiration)
//  .filters(java.util.List<java.lang.String>)
//  .identity(java.lang.String)
//  .precedence(java.lang.Number)
//  .ruleSettings(ZeroTrustGatewayPolicyRuleSettings)
//  .schedule(ZeroTrustGatewayPolicySchedule)
//  .traffic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.action">action</a></code> | <code>java.lang.String</code> | The action to preform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | The wirefilter expression used for device posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the rule is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a></code> | The expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | The protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.identity">identity</a></code> | <code>java.lang.String</code> | The wirefilter expression used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | Precedence sets the order of your rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | Additional settings that modify the rule's action. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a></code> | The schedule for activating DNS policies. This does not apply to HTTP or network policies. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.traffic">traffic</a></code> | <code>java.lang.String</code> | The wirefilter expression used for traffic matching. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}.

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action to preform when the associated traffic, identity, and device posture expressions are either absent or evaluate to `true`.

Available values: "on", "off", "allow", "block", "scan", "noscan", "safesearch", "ytrestricted", "isolate", "noisolate", "override", "l4_override", "egress", "resolve", "quarantine", "redirect".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.devicePosture"></a>

```java
public java.lang.String getDevicePosture();
```

- *Type:* java.lang.String

The wirefilter expression used for device posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.expiration"></a>

```java
public ZeroTrustGatewayPolicyExpiration getExpiration();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a>

The expiration time stamp and default duration of a DNS policy. Takes precedence over the policy's `schedule` configuration, if any.

This does not apply to HTTP or network policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#expiration ZeroTrustGatewayPolicy#expiration}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic, identity, and device posture expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

The wirefilter expression used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

Precedence sets the order of your rules.

Lower values indicate higher precedence. At each processing phase, applicable rules are evaluated in ascending order of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.ruleSettings"></a>

```java
public ZeroTrustGatewayPolicyRuleSettings getRuleSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

Additional settings that modify the rule's action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.schedule"></a>

```java
public ZeroTrustGatewayPolicySchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a>

The schedule for activating DNS policies. This does not apply to HTTP or network policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#schedule ZeroTrustGatewayPolicy#schedule}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.traffic"></a>

```java
public java.lang.String getTraffic();
```

- *Type:* java.lang.String

The wirefilter expression used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}

---

### ZeroTrustGatewayPolicyExpiration <a name="ZeroTrustGatewayPolicyExpiration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyExpiration;

ZeroTrustGatewayPolicyExpiration.builder()
    .expiresAt(java.lang.String)
//  .duration(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The time stamp at which the policy will expire and cease to be applied. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration.property.duration">duration</a></code> | <code>java.lang.Number</code> | The default duration a policy will be active in minutes. |

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

The time stamp at which the policy will expire and cease to be applied.

Must adhere to RFC 3339 and include a UTC offset. Non-zero
offsets are accepted but will be converted to the equivalent
value with offset zero (UTC+00:00) and will be returned as time
stamps with offset zero denoted by a trailing 'Z'.

Policies with an expiration do not consider the timezone of
clients they are applied to, and expire "globally" at the point
given by their `expires_at` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#expires_at ZeroTrustGatewayPolicy#expires_at}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

The default duration a policy will be active in minutes.

Must be set in order to use the `reset_expiration` endpoint on this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}

---

### ZeroTrustGatewayPolicyRuleSettings <a name="ZeroTrustGatewayPolicyRuleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettings;

ZeroTrustGatewayPolicyRuleSettings.builder()
//  .addHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .allowChildBypass(java.lang.Boolean)
//  .allowChildBypass(IResolvable)
//  .auditSsh(ZeroTrustGatewayPolicyRuleSettingsAuditSsh)
//  .bisoAdminControls(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls)
//  .blockPage(ZeroTrustGatewayPolicyRuleSettingsBlockPage)
//  .blockPageEnabled(java.lang.Boolean)
//  .blockPageEnabled(IResolvable)
//  .blockReason(java.lang.String)
//  .bypassParentRule(java.lang.Boolean)
//  .bypassParentRule(IResolvable)
//  .checkSession(ZeroTrustGatewayPolicyRuleSettingsCheckSession)
//  .dnsResolvers(ZeroTrustGatewayPolicyRuleSettingsDnsResolvers)
//  .egress(ZeroTrustGatewayPolicyRuleSettingsEgress)
//  .ignoreCnameCategoryMatches(java.lang.Boolean)
//  .ignoreCnameCategoryMatches(IResolvable)
//  .insecureDisableDnssecValidation(java.lang.Boolean)
//  .insecureDisableDnssecValidation(IResolvable)
//  .ipCategories(java.lang.Boolean)
//  .ipCategories(IResolvable)
//  .ipIndicatorFeeds(java.lang.Boolean)
//  .ipIndicatorFeeds(IResolvable)
//  .l4Override(ZeroTrustGatewayPolicyRuleSettingsL4Override)
//  .notificationSettings(ZeroTrustGatewayPolicyRuleSettingsNotificationSettings)
//  .overrideHost(java.lang.String)
//  .overrideIps(java.util.List<java.lang.String>)
//  .payloadLog(ZeroTrustGatewayPolicyRuleSettingsPayloadLog)
//  .quarantine(ZeroTrustGatewayPolicyRuleSettingsQuarantine)
//  .redirect(ZeroTrustGatewayPolicyRuleSettingsRedirect)
//  .resolveDnsInternally(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally)
//  .resolveDnsThroughCloudflare(java.lang.Boolean)
//  .resolveDnsThroughCloudflare(IResolvable)
//  .untrustedCert(ZeroTrustGatewayPolicyRuleSettingsUntrustedCert)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Add custom headers to allowed requests, in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.allowChildBypass">allowChildBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set by parent MSP accounts to enable their children to bypass this rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.auditSsh">auditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | Settings for the Audit SSH action. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | Configure how browser isolation behaves. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a></code> | Custom block page settings. If missing/null, blocking will use the the account settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the custom block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockReason">blockReason</a></code> | <code>java.lang.String</code> | The text describing why this block occurred, displayed on the custom block page (if enabled). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bypassParentRule">bypassParentRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set by children MSP accounts to bypass their parent's rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | Configure how session check behaves. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.dnsResolvers">dnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | Add your own custom resolvers to route queries that match the resolver policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | Configure how Gateway Proxy traffic egresses. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ignoreCnameCategoryMatches">ignoreCnameCategoryMatches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true, to ignore the category matches at CNAME domains in a response. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | INSECURE - disable DNSSEC validation (for Allow actions). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipCategories">ipCategories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to enable IPs in DNS resolver category blocks. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipIndicatorFeeds">ipIndicatorFeeds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to include IPs in DNS resolver indicator feed blocks. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | Send matching traffic to the supplied destination IP address and port. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | Configure a notification to display on the user's device when this rule is matched. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | Override matching DNS queries with a hostname. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | Override matching DNS queries with an IP or set of IPs. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | Configure DLP payload logging. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.quarantine">quarantine</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a></code> | Settings that apply to quarantine rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a></code> | Settings that apply to redirect rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsInternally">resolveDnsInternally</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a></code> | Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsThroughCloudflare">resolveDnsThroughCloudflare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_internally' is set. Only valid when a rule's action is set to 'resolve'. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.untrustedCert">untrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | Configure behavior when an upstream cert is invalid or an SSL error occurs. |

---

##### `addHeaders`<sup>Optional</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Add custom headers to allowed requests, in the form of key-value pairs.

Keys are header names, pointing to an array with its header value(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}

---

##### `allowChildBypass`<sup>Optional</sup> <a name="allowChildBypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.allowChildBypass"></a>

```java
public java.lang.Object getAllowChildBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set by parent MSP accounts to enable their children to bypass this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}

---

##### `auditSsh`<sup>Optional</sup> <a name="auditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.auditSsh"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsAuditSsh getAuditSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

Settings for the Audit SSH action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}

---

##### `bisoAdminControls`<sup>Optional</sup> <a name="bisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bisoAdminControls"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls getBisoAdminControls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

Configure how browser isolation behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPage"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsBlockPage getBlockPage();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a>

Custom block page settings. If missing/null, blocking will use the the account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#block_page ZeroTrustGatewayPolicy#block_page}

---

##### `blockPageEnabled`<sup>Optional</sup> <a name="blockPageEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageEnabled"></a>

```java
public java.lang.Object getBlockPageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the custom block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}

---

##### `blockReason`<sup>Optional</sup> <a name="blockReason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockReason"></a>

```java
public java.lang.String getBlockReason();
```

- *Type:* java.lang.String

The text describing why this block occurred, displayed on the custom block page (if enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#block_reason ZeroTrustGatewayPolicy#block_reason}

---

##### `bypassParentRule`<sup>Optional</sup> <a name="bypassParentRule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bypassParentRule"></a>

```java
public java.lang.Object getBypassParentRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set by children MSP accounts to bypass their parent's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}

---

##### `checkSession`<sup>Optional</sup> <a name="checkSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.checkSession"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsCheckSession getCheckSession();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

Configure how session check behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.dnsResolvers"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolvers getDnsResolvers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

Add your own custom resolvers to route queries that match the resolver policy.

Cannot be used when 'resolve_dns_through_cloudflare' or 'resolve_dns_internally' are set. DNS queries will route to the address closest to their origin. Only valid when a rule's action is set to 'resolve'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.egress"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsEgress getEgress();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

Configure how Gateway Proxy traffic egresses.

You can enable this setting for rules with Egress actions and filters, or omit it to indicate local egress via WARP IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}

---

##### `ignoreCnameCategoryMatches`<sup>Optional</sup> <a name="ignoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ignoreCnameCategoryMatches"></a>

```java
public java.lang.Object getIgnoreCnameCategoryMatches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true, to ignore the category matches at CNAME domains in a response.

If unchecked, the categories in this rule will be checked against all the CNAME domain categories in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}

---

##### `insecureDisableDnssecValidation`<sup>Optional</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

INSECURE - disable DNSSEC validation (for Allow actions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}

---

##### `ipCategories`<sup>Optional</sup> <a name="ipCategories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipCategories"></a>

```java
public java.lang.Object getIpCategories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to enable IPs in DNS resolver category blocks.

By default categories only block based on domain names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}

---

##### `ipIndicatorFeeds`<sup>Optional</sup> <a name="ipIndicatorFeeds" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipIndicatorFeeds"></a>

```java
public java.lang.Object getIpIndicatorFeeds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to include IPs in DNS resolver indicator feed blocks.

By default indicator feeds only block based on domain names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ip_indicator_feeds ZeroTrustGatewayPolicy#ip_indicator_feeds}

---

##### `l4Override`<sup>Optional</sup> <a name="l4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.l4Override"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsL4Override getL4Override();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

Send matching traffic to the supplied destination IP address and port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.notificationSettings"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

Configure a notification to display on the user's device when this rule is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}

---

##### `overrideHost`<sup>Optional</sup> <a name="overrideHost" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideHost"></a>

```java
public java.lang.String getOverrideHost();
```

- *Type:* java.lang.String

Override matching DNS queries with a hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}

---

##### `overrideIps`<sup>Optional</sup> <a name="overrideIps" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideIps"></a>

```java
public java.util.List<java.lang.String> getOverrideIps();
```

- *Type:* java.util.List<java.lang.String>

Override matching DNS queries with an IP or set of IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}

---

##### `payloadLog`<sup>Optional</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.payloadLog"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsPayloadLog getPayloadLog();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

Configure DLP payload logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}

---

##### `quarantine`<sup>Optional</sup> <a name="quarantine" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.quarantine"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsQuarantine getQuarantine();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a>

Settings that apply to quarantine rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#quarantine ZeroTrustGatewayPolicy#quarantine}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.redirect"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsRedirect getRedirect();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a>

Settings that apply to redirect rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#redirect ZeroTrustGatewayPolicy#redirect}

---

##### `resolveDnsInternally`<sup>Optional</sup> <a name="resolveDnsInternally" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsInternally"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally getResolveDnsInternally();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a>

Configure to forward the query to the internal DNS service, passing the specified 'view_id' as input.

Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action is set to 'resolve'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#resolve_dns_internally ZeroTrustGatewayPolicy#resolve_dns_internally}

---

##### `resolveDnsThroughCloudflare`<sup>Optional</sup> <a name="resolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsThroughCloudflare"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when 'dns_resolvers' are specified or 'resolve_dns_internally' is set. Only valid when a rule's action is set to 'resolve'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}

---

##### `untrustedCert`<sup>Optional</sup> <a name="untrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.untrustedCert"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsUntrustedCert getUntrustedCert();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

Configure behavior when an upstream cert is invalid or an SSL error occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}

---

### ZeroTrustGatewayPolicyRuleSettingsAuditSsh <a name="ZeroTrustGatewayPolicyRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh;

ZeroTrustGatewayPolicyRuleSettingsAuditSsh.builder()
//  .commandLogging(java.lang.Boolean)
//  .commandLogging(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.property.commandLogging">commandLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable to turn on SSH command logging. |

---

##### `commandLogging`<sup>Optional</sup> <a name="commandLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.property.commandLogging"></a>

```java
public java.lang.Object getCommandLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable to turn on SSH command logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}

---

### ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls <a name="ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls;

ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.builder()
//  .copy(java.lang.String)
//  .dcp(java.lang.Boolean)
//  .dcp(IResolvable)
//  .dd(java.lang.Boolean)
//  .dd(IResolvable)
//  .dk(java.lang.Boolean)
//  .dk(IResolvable)
//  .download(java.lang.String)
//  .dp(java.lang.Boolean)
//  .dp(IResolvable)
//  .du(java.lang.Boolean)
//  .du(IResolvable)
//  .keyboard(java.lang.String)
//  .paste(java.lang.String)
//  .printing(java.lang.String)
//  .upload(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.copy">copy</a></code> | <code>java.lang.String</code> | Configure whether copy is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dcp">dcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to enable copy-pasting. Only applies when `version == "v1"`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dd">dd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to enable downloading. Only applies when `version == "v1"`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dk">dk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to enable keyboard usage. Only applies when `version == "v1"`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.download">download</a></code> | <code>java.lang.String</code> | Configure whether downloading enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dp">dp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to enable printing. Only applies when `version == "v1"`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.du">du</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to false to enable uploading. Only applies when `version == "v1"`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.keyboard">keyboard</a></code> | <code>java.lang.String</code> | Configure whether keyboard usage is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.paste">paste</a></code> | <code>java.lang.String</code> | Configure whether pasting is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.printing">printing</a></code> | <code>java.lang.String</code> | Configure whether printing is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.upload">upload</a></code> | <code>java.lang.String</code> | Configure whether uploading is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.version">version</a></code> | <code>java.lang.String</code> | Indicates which version of the browser isolation controls should apply. Available values: "v1", "v2". |

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.copy"></a>

```java
public java.lang.String getCopy();
```

- *Type:* java.lang.String

Configure whether copy is enabled or not.

When set with "remote_only", copying isolated content from the remote browser to the user's local clipboard is disabled. When absent, copy is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled", "remote_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#copy ZeroTrustGatewayPolicy#copy}

---

##### `dcp`<sup>Optional</sup> <a name="dcp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dcp"></a>

```java
public java.lang.Object getDcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to enable copy-pasting. Only applies when `version == "v1"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#dcp ZeroTrustGatewayPolicy#dcp}

---

##### `dd`<sup>Optional</sup> <a name="dd" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dd"></a>

```java
public java.lang.Object getDd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to enable downloading. Only applies when `version == "v1"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#dd ZeroTrustGatewayPolicy#dd}

---

##### `dk`<sup>Optional</sup> <a name="dk" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dk"></a>

```java
public java.lang.Object getDk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to enable keyboard usage. Only applies when `version == "v1"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#dk ZeroTrustGatewayPolicy#dk}

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.download"></a>

```java
public java.lang.String getDownload();
```

- *Type:* java.lang.String

Configure whether downloading enabled or not.

When absent, downloading is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#download ZeroTrustGatewayPolicy#download}

---

##### `dp`<sup>Optional</sup> <a name="dp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.dp"></a>

```java
public java.lang.Object getDp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to enable printing. Only applies when `version == "v1"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#dp ZeroTrustGatewayPolicy#dp}

---

##### `du`<sup>Optional</sup> <a name="du" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.du"></a>

```java
public java.lang.Object getDu();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to false to enable uploading. Only applies when `version == "v1"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#du ZeroTrustGatewayPolicy#du}

---

##### `keyboard`<sup>Optional</sup> <a name="keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.keyboard"></a>

```java
public java.lang.String getKeyboard();
```

- *Type:* java.lang.String

Configure whether keyboard usage is enabled or not.

When absent, keyboard usage is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#keyboard ZeroTrustGatewayPolicy#keyboard}

---

##### `paste`<sup>Optional</sup> <a name="paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.paste"></a>

```java
public java.lang.String getPaste();
```

- *Type:* java.lang.String

Configure whether pasting is enabled or not.

When set with "remote_only", pasting content from the user's local clipboard into isolated pages is disabled. When absent, paste is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled", "remote_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#paste ZeroTrustGatewayPolicy#paste}

---

##### `printing`<sup>Optional</sup> <a name="printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.printing"></a>

```java
public java.lang.String getPrinting();
```

- *Type:* java.lang.String

Configure whether printing is enabled or not.

When absent, printing is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#printing ZeroTrustGatewayPolicy#printing}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.upload"></a>

```java
public java.lang.String getUpload();
```

- *Type:* java.lang.String

Configure whether uploading is enabled or not.

When absent, uploading is enabled. Only applies when `version == "v2"`.
Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#upload ZeroTrustGatewayPolicy#upload}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Indicates which version of the browser isolation controls should apply. Available values: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#version ZeroTrustGatewayPolicy#version}

---

### ZeroTrustGatewayPolicyRuleSettingsBlockPage <a name="ZeroTrustGatewayPolicyRuleSettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsBlockPage;

ZeroTrustGatewayPolicyRuleSettingsBlockPage.builder()
    .targetUri(java.lang.String)
//  .includeContext(java.lang.Boolean)
//  .includeContext(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | URI to which the user will be redirected. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, context information will be passed as query parameters. |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

URI to which the user will be redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}

---

##### `includeContext`<sup>Optional</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, context information will be passed as query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}

---

### ZeroTrustGatewayPolicyRuleSettingsCheckSession <a name="ZeroTrustGatewayPolicyRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsCheckSession;

ZeroTrustGatewayPolicyRuleSettingsCheckSession.builder()
//  .duration(java.lang.String)
//  .enforce(java.lang.Boolean)
//  .enforce(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.duration">duration</a></code> | <code>java.lang.String</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to enable session enforcement. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to enable session enforcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolvers <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers;

ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.builder()
//  .ipv4(IResolvable)
//  .ipv4(java.util.List<ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4>)
//  .ipv6(IResolvable)
//  .ipv6(java.util.List<ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv4">ipv4</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv6">ipv6</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv4"></a>

```java
public java.lang.Object getIpv4();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv6"></a>

```java
public java.lang.Object getIpv6();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}.

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4;

ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.builder()
    .ip(java.lang.String)
//  .port(java.lang.Number)
//  .routeThroughPrivateNetwork(java.lang.Boolean)
//  .routeThroughPrivateNetwork(IResolvable)
//  .vnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.ip">ip</a></code> | <code>java.lang.String</code> | IPv4 address of upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.port">port</a></code> | <code>java.lang.Number</code> | A port number to use for upstream resolver. Defaults to 53 if unspecified. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to connect to this resolver over a private network. Must be set when vnet_id is set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IPv4 address of upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

A port number to use for upstream resolver. Defaults to 53 if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

##### `routeThroughPrivateNetwork`<sup>Optional</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to connect to this resolver over a private network. Must be set when vnet_id is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}

---

##### `vnetId`<sup>Optional</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6;

ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.builder()
    .ip(java.lang.String)
//  .port(java.lang.Number)
//  .routeThroughPrivateNetwork(java.lang.Boolean)
//  .routeThroughPrivateNetwork(IResolvable)
//  .vnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.ip">ip</a></code> | <code>java.lang.String</code> | IPv6 address of upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.port">port</a></code> | <code>java.lang.Number</code> | A port number to use for upstream resolver. Defaults to 53 if unspecified. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to connect to this resolver over a private network. Must be set when vnet_id is set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IPv6 address of upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

A port number to use for upstream resolver. Defaults to 53 if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

##### `routeThroughPrivateNetwork`<sup>Optional</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to connect to this resolver over a private network. Must be set when vnet_id is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}

---

##### `vnetId`<sup>Optional</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

Optionally specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}

---

### ZeroTrustGatewayPolicyRuleSettingsEgress <a name="ZeroTrustGatewayPolicyRuleSettingsEgress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsEgress;

ZeroTrustGatewayPolicyRuleSettingsEgress.builder()
//  .ipv4(java.lang.String)
//  .ipv4Fallback(java.lang.String)
//  .ipv6(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4Fallback">ipv4Fallback</a></code> | <code>java.lang.String</code> | The fallback IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The IPv6 range to be used for egress. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}

---

##### `ipv4Fallback`<sup>Optional</sup> <a name="ipv4Fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4Fallback"></a>

```java
public java.lang.String getIpv4Fallback();
```

- *Type:* java.lang.String

The fallback IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egress via WARP IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}

---

### ZeroTrustGatewayPolicyRuleSettingsL4Override <a name="ZeroTrustGatewayPolicyRuleSettingsL4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsL4Override;

ZeroTrustGatewayPolicyRuleSettingsL4Override.builder()
//  .ip(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.ip">ip</a></code> | <code>java.lang.String</code> | IPv4 or IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.port">port</a></code> | <code>java.lang.Number</code> | A port number to use for TCP/UDP overrides. |

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IPv4 or IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

A port number to use for TCP/UDP overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

### ZeroTrustGatewayPolicyRuleSettingsNotificationSettings <a name="ZeroTrustGatewayPolicyRuleSettingsNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings;

ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .includeContext(java.lang.Boolean)
//  .includeContext(IResolvable)
//  .msg(java.lang.String)
//  .supportUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set notification on. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, context information will be passed as query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.msg">msg</a></code> | <code>java.lang.String</code> | Customize the message shown in the notification. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | Optional URL to direct users to additional information. If not set, the notification will open a block page. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set notification on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `includeContext`<sup>Optional</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, context information will be passed as query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}

---

##### `msg`<sup>Optional</sup> <a name="msg" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.msg"></a>

```java
public java.lang.String getMsg();
```

- *Type:* java.lang.String

Customize the message shown in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#msg ZeroTrustGatewayPolicy#msg}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

Optional URL to direct users to additional information. If not set, the notification will open a block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}

---

### ZeroTrustGatewayPolicyRuleSettingsPayloadLog <a name="ZeroTrustGatewayPolicyRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog;

ZeroTrustGatewayPolicyRuleSettingsPayloadLog.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to enable DLP payload logging for this rule. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to enable DLP payload logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

### ZeroTrustGatewayPolicyRuleSettingsQuarantine <a name="ZeroTrustGatewayPolicyRuleSettingsQuarantine" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsQuarantine;

ZeroTrustGatewayPolicyRuleSettingsQuarantine.builder()
//  .fileTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine.property.fileTypes">fileTypes</a></code> | <code>java.util.List<java.lang.String></code> | Types of files to sandbox. |

---

##### `fileTypes`<sup>Optional</sup> <a name="fileTypes" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine.property.fileTypes"></a>

```java
public java.util.List<java.lang.String> getFileTypes();
```

- *Type:* java.util.List<java.lang.String>

Types of files to sandbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#file_types ZeroTrustGatewayPolicy#file_types}

---

### ZeroTrustGatewayPolicyRuleSettingsRedirect <a name="ZeroTrustGatewayPolicyRuleSettingsRedirect" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsRedirect;

ZeroTrustGatewayPolicyRuleSettingsRedirect.builder()
    .targetUri(java.lang.String)
//  .includeContext(java.lang.Boolean)
//  .includeContext(IResolvable)
//  .preservePathAndQuery(java.lang.Boolean)
//  .preservePathAndQuery(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | URI to which the user will be redirected. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, context information will be passed as query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.preservePathAndQuery">preservePathAndQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the path and query parameters from the original request will be appended to target_uri. |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

URI to which the user will be redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#target_uri ZeroTrustGatewayPolicy#target_uri}

---

##### `includeContext`<sup>Optional</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, context information will be passed as query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#include_context ZeroTrustGatewayPolicy#include_context}

---

##### `preservePathAndQuery`<sup>Optional</sup> <a name="preservePathAndQuery" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect.property.preservePathAndQuery"></a>

```java
public java.lang.Object getPreservePathAndQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the path and query parameters from the original request will be appended to target_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#preserve_path_and_query ZeroTrustGatewayPolicy#preserve_path_and_query}

---

### ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally <a name="ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally;

ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.builder()
//  .fallback(java.lang.String)
//  .viewId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.property.fallback">fallback</a></code> | <code>java.lang.String</code> | The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.property.viewId">viewId</a></code> | <code>java.lang.String</code> | The internal DNS view identifier that's passed to the internal DNS service. |

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.property.fallback"></a>

```java
public java.lang.String getFallback();
```

- *Type:* java.lang.String

The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries.

Available values: "none", "public_dns".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#fallback ZeroTrustGatewayPolicy#fallback}

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

The internal DNS view identifier that's passed to the internal DNS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#view_id ZeroTrustGatewayPolicy#view_id}

---

### ZeroTrustGatewayPolicyRuleSettingsUntrustedCert <a name="ZeroTrustGatewayPolicyRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert;

ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.builder()
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.property.action">action</a></code> | <code>java.lang.String</code> | The action performed when an untrusted certificate is seen. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action performed when an untrusted certificate is seen.

The default action is an error with HTTP code 526.
Available values: "pass_through", "block", "error".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

### ZeroTrustGatewayPolicySchedule <a name="ZeroTrustGatewayPolicySchedule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicySchedule;

ZeroTrustGatewayPolicySchedule.builder()
//  .fri(java.lang.String)
//  .mon(java.lang.String)
//  .sat(java.lang.String)
//  .sun(java.lang.String)
//  .thu(java.lang.String)
//  .timeZone(java.lang.String)
//  .tue(java.lang.String)
//  .wed(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.fri">fri</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Fridays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.mon">mon</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Mondays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.sat">sat</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Saturdays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.sun">sun</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Sundays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.thu">thu</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Thursdays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone the rule will be evaluated against. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.tue">tue</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Tuesdays, in increasing order from 00:00-24:00. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.wed">wed</a></code> | <code>java.lang.String</code> | The time intervals when the rule will be active on Wednesdays, in increasing order from 00:00-24:00. |

---

##### `fri`<sup>Optional</sup> <a name="fri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.fri"></a>

```java
public java.lang.String getFri();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Fridays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Fridays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#fri ZeroTrustGatewayPolicy#fri}

---

##### `mon`<sup>Optional</sup> <a name="mon" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.mon"></a>

```java
public java.lang.String getMon();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Mondays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Mondays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#mon ZeroTrustGatewayPolicy#mon}

---

##### `sat`<sup>Optional</sup> <a name="sat" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.sat"></a>

```java
public java.lang.String getSat();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Saturdays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Saturdays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#sat ZeroTrustGatewayPolicy#sat}

---

##### `sun`<sup>Optional</sup> <a name="sun" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.sun"></a>

```java
public java.lang.String getSun();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Sundays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Sundays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#sun ZeroTrustGatewayPolicy#sun}

---

##### `thu`<sup>Optional</sup> <a name="thu" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.thu"></a>

```java
public java.lang.String getThu();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Thursdays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Thursdays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#thu ZeroTrustGatewayPolicy#thu}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone the rule will be evaluated against.

If a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway will always use the current time at that time zone. If this parameter is omitted, then Gateway will use the time zone inferred from the user's source IP to evaluate the rule. If Gateway cannot determine the time zone from the IP, we will fall back to the time zone of the user's connected data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#time_zone ZeroTrustGatewayPolicy#time_zone}

---

##### `tue`<sup>Optional</sup> <a name="tue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.tue"></a>

```java
public java.lang.String getTue();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Tuesdays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Tuesdays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#tue ZeroTrustGatewayPolicy#tue}

---

##### `wed`<sup>Optional</sup> <a name="wed" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule.property.wed"></a>

```java
public java.lang.String getWed();
```

- *Type:* java.lang.String

The time intervals when the rule will be active on Wednesdays, in increasing order from 00:00-24:00.

If this parameter is omitted, the rule will be deactivated on Wednesdays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/zero_trust_gateway_policy#wed ZeroTrustGatewayPolicy#wed}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewayPolicyExpirationOutputReference <a name="ZeroTrustGatewayPolicyExpirationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyExpirationOutputReference;

new ZeroTrustGatewayPolicyExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.resetDuration"></a>

```java
public void resetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expired">expired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expired"></a>

```java
public IResolvable getExpired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyExpiration">ZeroTrustGatewayPolicyExpiration</a>

---


### ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resetCommandLogging">resetCommandLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLogging` <a name="resetCommandLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resetCommandLogging"></a>

```java
public void resetCommandLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLoggingInput">commandLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLogging">commandLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLoggingInput`<sup>Optional</sup> <a name="commandLoggingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLoggingInput"></a>

```java
public java.lang.Object getCommandLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commandLogging`<sup>Required</sup> <a name="commandLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```java
public java.lang.Object getCommandLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

---


### ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetCopy">resetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDcp">resetDcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDd">resetDd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDk">resetDk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDp">resetDp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDu">resetDu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetKeyboard">resetKeyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetPaste">resetPaste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetPrinting">resetPrinting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetUpload">resetUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopy` <a name="resetCopy" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetCopy"></a>

```java
public void resetCopy()
```

##### `resetDcp` <a name="resetDcp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDcp"></a>

```java
public void resetDcp()
```

##### `resetDd` <a name="resetDd" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDd"></a>

```java
public void resetDd()
```

##### `resetDk` <a name="resetDk" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDk"></a>

```java
public void resetDk()
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDownload"></a>

```java
public void resetDownload()
```

##### `resetDp` <a name="resetDp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDp"></a>

```java
public void resetDp()
```

##### `resetDu` <a name="resetDu" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDu"></a>

```java
public void resetDu()
```

##### `resetKeyboard` <a name="resetKeyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetKeyboard"></a>

```java
public void resetKeyboard()
```

##### `resetPaste` <a name="resetPaste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetPaste"></a>

```java
public void resetPaste()
```

##### `resetPrinting` <a name="resetPrinting" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetPrinting"></a>

```java
public void resetPrinting()
```

##### `resetUpload` <a name="resetUpload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetUpload"></a>

```java
public void resetUpload()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.copyInput">copyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dcpInput">dcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.ddInput">ddInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dkInput">dkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.downloadInput">downloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dpInput">dpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.duInput">duInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.keyboardInput">keyboardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.pasteInput">pasteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.printingInput">printingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.uploadInput">uploadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.copy">copy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dcp">dcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dd">dd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dk">dk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.download">download</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dp">dp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.du">du</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.keyboard">keyboard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.paste">paste</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.printing">printing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.upload">upload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyInput`<sup>Optional</sup> <a name="copyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.copyInput"></a>

```java
public java.lang.String getCopyInput();
```

- *Type:* java.lang.String

---

##### `dcpInput`<sup>Optional</sup> <a name="dcpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dcpInput"></a>

```java
public java.lang.Object getDcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ddInput`<sup>Optional</sup> <a name="ddInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.ddInput"></a>

```java
public java.lang.Object getDdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dkInput`<sup>Optional</sup> <a name="dkInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dkInput"></a>

```java
public java.lang.Object getDkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.downloadInput"></a>

```java
public java.lang.String getDownloadInput();
```

- *Type:* java.lang.String

---

##### `dpInput`<sup>Optional</sup> <a name="dpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dpInput"></a>

```java
public java.lang.Object getDpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duInput`<sup>Optional</sup> <a name="duInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.duInput"></a>

```java
public java.lang.Object getDuInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyboardInput`<sup>Optional</sup> <a name="keyboardInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.keyboardInput"></a>

```java
public java.lang.String getKeyboardInput();
```

- *Type:* java.lang.String

---

##### `pasteInput`<sup>Optional</sup> <a name="pasteInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.pasteInput"></a>

```java
public java.lang.String getPasteInput();
```

- *Type:* java.lang.String

---

##### `printingInput`<sup>Optional</sup> <a name="printingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.printingInput"></a>

```java
public java.lang.String getPrintingInput();
```

- *Type:* java.lang.String

---

##### `uploadInput`<sup>Optional</sup> <a name="uploadInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.uploadInput"></a>

```java
public java.lang.String getUploadInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.copy"></a>

```java
public java.lang.String getCopy();
```

- *Type:* java.lang.String

---

##### `dcp`<sup>Required</sup> <a name="dcp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dcp"></a>

```java
public java.lang.Object getDcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dd`<sup>Required</sup> <a name="dd" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dd"></a>

```java
public java.lang.Object getDd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dk`<sup>Required</sup> <a name="dk" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dk"></a>

```java
public java.lang.Object getDk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.download"></a>

```java
public java.lang.String getDownload();
```

- *Type:* java.lang.String

---

##### `dp`<sup>Required</sup> <a name="dp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.dp"></a>

```java
public java.lang.Object getDp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `du`<sup>Required</sup> <a name="du" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.du"></a>

```java
public java.lang.Object getDu();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyboard`<sup>Required</sup> <a name="keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.keyboard"></a>

```java
public java.lang.String getKeyboard();
```

- *Type:* java.lang.String

---

##### `paste`<sup>Required</sup> <a name="paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.paste"></a>

```java
public java.lang.String getPaste();
```

- *Type:* java.lang.String

---

##### `printing`<sup>Required</sup> <a name="printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.printing"></a>

```java
public java.lang.String getPrinting();
```

- *Type:* java.lang.String

---

##### `upload`<sup>Required</sup> <a name="upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.upload"></a>

```java
public java.lang.String getUpload();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

---


### ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.resetIncludeContext">resetIncludeContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeContext` <a name="resetIncludeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.resetIncludeContext"></a>

```java
public void resetIncludeContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.includeContextInput">includeContextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeContextInput`<sup>Optional</sup> <a name="includeContextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.includeContextInput"></a>

```java
public java.lang.Object getIncludeContextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.targetUriInput"></a>

```java
public java.lang.String getTargetUriInput();
```

- *Type:* java.lang.String

---

##### `includeContext`<sup>Required</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a>

---


### ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resetEnforce"></a>

```java
public void resetEnforce()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```java
public java.lang.Object getEnforceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List;

new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference;

new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork">resetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetVnetId">resetVnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRouteThroughPrivateNetwork` <a name="resetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork"></a>

```java
public void resetRouteThroughPrivateNetwork()
```

##### `resetVnetId` <a name="resetVnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetVnetId"></a>

```java
public void resetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput">routeThroughPrivateNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput">vnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetworkInput`<sup>Optional</sup> <a name="routeThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput"></a>

```java
public java.lang.Object getRouteThroughPrivateNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetIdInput`<sup>Optional</sup> <a name="vnetIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput"></a>

```java
public java.lang.String getVnetIdInput();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetwork`<sup>Required</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List;

new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference;

new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork">resetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetVnetId">resetVnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRouteThroughPrivateNetwork` <a name="resetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork"></a>

```java
public void resetRouteThroughPrivateNetwork()
```

##### `resetVnetId` <a name="resetVnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetVnetId"></a>

```java
public void resetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput">routeThroughPrivateNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput">vnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetworkInput`<sup>Optional</sup> <a name="routeThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput"></a>

```java
public java.lang.Object getRouteThroughPrivateNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetIdInput`<sup>Optional</sup> <a name="vnetIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput"></a>

```java
public java.lang.String getVnetIdInput();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetwork`<sup>Required</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4"></a>

```java
public void putIpv4(IResolvable OR java.util.List<ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6"></a>

```java
public void putIpv6(IResolvable OR java.util.List<ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

---


### ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4Fallback">resetIpv4Fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv4Fallback` <a name="resetIpv4Fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```java
public void resetIpv4Fallback()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4FallbackInput">ipv4FallbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Fallback">ipv4Fallback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4FallbackInput`<sup>Optional</sup> <a name="ipv4FallbackInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```java
public java.lang.String getIpv4FallbackInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```java
public java.lang.String getIpv4Input();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv4Fallback`<sup>Required</sup> <a name="ipv4Fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```java
public java.lang.String getIpv4Fallback();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

---


### ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

---


### ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetIncludeContext">resetIncludeContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetMsg">resetMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIncludeContext` <a name="resetIncludeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetIncludeContext"></a>

```java
public void resetIncludeContext()
```

##### `resetMsg` <a name="resetMsg" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetMsg"></a>

```java
public void resetMsg()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.includeContextInput">includeContextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.msgInput">msgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.msg">msg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeContextInput`<sup>Optional</sup> <a name="includeContextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.includeContextInput"></a>

```java
public java.lang.Object getIncludeContextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `msgInput`<sup>Optional</sup> <a name="msgInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.msgInput"></a>

```java
public java.lang.String getMsgInput();
```

- *Type:* java.lang.String

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeContext`<sup>Required</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `msg`<sup>Required</sup> <a name="msg" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.msg"></a>

```java
public java.lang.String getMsg();
```

- *Type:* java.lang.String

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

---


### ZeroTrustGatewayPolicyRuleSettingsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh">putAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls">putBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBlockPage">putBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession">putCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers">putDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override">putL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog">putPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putQuarantine">putQuarantine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putResolveDnsInternally">putResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert">putUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAddHeaders">resetAddHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAllowChildBypass">resetAllowChildBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAuditSsh">resetAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBisoAdminControls">resetBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPage">resetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageEnabled">resetBlockPageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockReason">resetBlockReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBypassParentRule">resetBypassParentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetCheckSession">resetCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetDnsResolvers">resetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches">resetIgnoreCnameCategoryMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">resetInsecureDisableDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpCategories">resetIpCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpIndicatorFeeds">resetIpIndicatorFeeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetL4Override">resetL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideHost">resetOverrideHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideIps">resetOverrideIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetPayloadLog">resetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetQuarantine">resetQuarantine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsInternally">resetResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsThroughCloudflare">resetResolveDnsThroughCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetUntrustedCert">resetUntrustedCert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditSsh` <a name="putAuditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh"></a>

```java
public void putAuditSsh(ZeroTrustGatewayPolicyRuleSettingsAuditSsh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

---

##### `putBisoAdminControls` <a name="putBisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls"></a>

```java
public void putBisoAdminControls(ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

---

##### `putBlockPage` <a name="putBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBlockPage"></a>

```java
public void putBlockPage(ZeroTrustGatewayPolicyRuleSettingsBlockPage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a>

---

##### `putCheckSession` <a name="putCheckSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession"></a>

```java
public void putCheckSession(ZeroTrustGatewayPolicyRuleSettingsCheckSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

---

##### `putDnsResolvers` <a name="putDnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers"></a>

```java
public void putDnsResolvers(ZeroTrustGatewayPolicyRuleSettingsDnsResolvers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress"></a>

```java
public void putEgress(ZeroTrustGatewayPolicyRuleSettingsEgress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

---

##### `putL4Override` <a name="putL4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override"></a>

```java
public void putL4Override(ZeroTrustGatewayPolicyRuleSettingsL4Override value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings"></a>

```java
public void putNotificationSettings(ZeroTrustGatewayPolicyRuleSettingsNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

---

##### `putPayloadLog` <a name="putPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog"></a>

```java
public void putPayloadLog(ZeroTrustGatewayPolicyRuleSettingsPayloadLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

---

##### `putQuarantine` <a name="putQuarantine" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putQuarantine"></a>

```java
public void putQuarantine(ZeroTrustGatewayPolicyRuleSettingsQuarantine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putQuarantine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putRedirect"></a>

```java
public void putRedirect(ZeroTrustGatewayPolicyRuleSettingsRedirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a>

---

##### `putResolveDnsInternally` <a name="putResolveDnsInternally" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putResolveDnsInternally"></a>

```java
public void putResolveDnsInternally(ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putResolveDnsInternally.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a>

---

##### `putUntrustedCert` <a name="putUntrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert"></a>

```java
public void putUntrustedCert(ZeroTrustGatewayPolicyRuleSettingsUntrustedCert value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

---

##### `resetAddHeaders` <a name="resetAddHeaders" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAddHeaders"></a>

```java
public void resetAddHeaders()
```

##### `resetAllowChildBypass` <a name="resetAllowChildBypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAllowChildBypass"></a>

```java
public void resetAllowChildBypass()
```

##### `resetAuditSsh` <a name="resetAuditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAuditSsh"></a>

```java
public void resetAuditSsh()
```

##### `resetBisoAdminControls` <a name="resetBisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBisoAdminControls"></a>

```java
public void resetBisoAdminControls()
```

##### `resetBlockPage` <a name="resetBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPage"></a>

```java
public void resetBlockPage()
```

##### `resetBlockPageEnabled` <a name="resetBlockPageEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```java
public void resetBlockPageEnabled()
```

##### `resetBlockReason` <a name="resetBlockReason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockReason"></a>

```java
public void resetBlockReason()
```

##### `resetBypassParentRule` <a name="resetBypassParentRule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBypassParentRule"></a>

```java
public void resetBypassParentRule()
```

##### `resetCheckSession` <a name="resetCheckSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetCheckSession"></a>

```java
public void resetCheckSession()
```

##### `resetDnsResolvers` <a name="resetDnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetDnsResolvers"></a>

```java
public void resetDnsResolvers()
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetIgnoreCnameCategoryMatches` <a name="resetIgnoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches"></a>

```java
public void resetIgnoreCnameCategoryMatches()
```

##### `resetInsecureDisableDnssecValidation` <a name="resetInsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```java
public void resetInsecureDisableDnssecValidation()
```

##### `resetIpCategories` <a name="resetIpCategories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpCategories"></a>

```java
public void resetIpCategories()
```

##### `resetIpIndicatorFeeds` <a name="resetIpIndicatorFeeds" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpIndicatorFeeds"></a>

```java
public void resetIpIndicatorFeeds()
```

##### `resetL4Override` <a name="resetL4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetL4Override"></a>

```java
public void resetL4Override()
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetNotificationSettings"></a>

```java
public void resetNotificationSettings()
```

##### `resetOverrideHost` <a name="resetOverrideHost" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideHost"></a>

```java
public void resetOverrideHost()
```

##### `resetOverrideIps` <a name="resetOverrideIps" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideIps"></a>

```java
public void resetOverrideIps()
```

##### `resetPayloadLog` <a name="resetPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetPayloadLog"></a>

```java
public void resetPayloadLog()
```

##### `resetQuarantine` <a name="resetQuarantine" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetQuarantine"></a>

```java
public void resetQuarantine()
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetRedirect"></a>

```java
public void resetRedirect()
```

##### `resetResolveDnsInternally` <a name="resetResolveDnsInternally" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsInternally"></a>

```java
public void resetResolveDnsInternally()
```

##### `resetResolveDnsThroughCloudflare` <a name="resetResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsThroughCloudflare"></a>

```java
public void resetResolveDnsThroughCloudflare()
```

##### `resetUntrustedCert` <a name="resetUntrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetUntrustedCert"></a>

```java
public void resetUntrustedCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSsh">auditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference">ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference">ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference">ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolvers">dnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference">ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference">ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference">ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference">ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.quarantine">quarantine</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference">ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference">ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsInternally">resolveDnsInternally</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCert">untrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference">ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeadersInput">addHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypassInput">allowChildBypassInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSshInput">auditSshInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControlsInput">bisoAdminControlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabledInput">blockPageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageInput">blockPageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockReasonInput">blockReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRuleInput">bypassParentRuleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSessionInput">checkSessionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolversInput">dnsResolversInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egressInput">egressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput">ignoreCnameCategoryMatchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">insecureDisableDnssecValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategoriesInput">ipCategoriesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipIndicatorFeedsInput">ipIndicatorFeedsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4OverrideInput">l4OverrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHostInput">overrideHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIpsInput">overrideIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLogInput">payloadLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.quarantineInput">quarantineInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.redirectInput">redirectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsInternallyInput">resolveDnsInternallyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput">resolveDnsThroughCloudflareInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCertInput">untrustedCertInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypass">allowChildBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockReason">blockReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRule">bypassParentRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatches">ignoreCnameCategoryMatches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategories">ipCategories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipIndicatorFeeds">ipIndicatorFeeds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflare">resolveDnsThroughCloudflare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditSsh`<sup>Required</sup> <a name="auditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSsh"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference getAuditSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference">ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference</a>

---

##### `bisoAdminControls`<sup>Required</sup> <a name="bisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControls"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference getBisoAdminControls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `blockPage`<sup>Required</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPage"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference getBlockPage();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference">ZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference</a>

---

##### `checkSession`<sup>Required</sup> <a name="checkSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSession"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference getCheckSession();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference">ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference</a>

---

##### `dnsResolvers`<sup>Required</sup> <a name="dnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolvers"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference getDnsResolvers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference">ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egress"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference getEgress();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference">ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference</a>

---

##### `l4Override`<sup>Required</sup> <a name="l4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4Override"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference getL4Override();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference">ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference</a>

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettings"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference</a>

---

##### `payloadLog`<sup>Required</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLog"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference getPayloadLog();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference">ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference</a>

---

##### `quarantine`<sup>Required</sup> <a name="quarantine" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.quarantine"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference getQuarantine();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference">ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.redirect"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference getRedirect();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference">ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference</a>

---

##### `resolveDnsInternally`<sup>Required</sup> <a name="resolveDnsInternally" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsInternally"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference getResolveDnsInternally();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference</a>

---

##### `untrustedCert`<sup>Required</sup> <a name="untrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCert"></a>

```java
public ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference getUntrustedCert();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference">ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference</a>

---

##### `addHeadersInput`<sup>Optional</sup> <a name="addHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowChildBypassInput`<sup>Optional</sup> <a name="allowChildBypassInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypassInput"></a>

```java
public java.lang.Object getAllowChildBypassInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `auditSshInput`<sup>Optional</sup> <a name="auditSshInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSshInput"></a>

```java
public java.lang.Object getAuditSshInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

---

##### `bisoAdminControlsInput`<sup>Optional</sup> <a name="bisoAdminControlsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```java
public java.lang.Object getBisoAdminControlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

---

##### `blockPageEnabledInput`<sup>Optional</sup> <a name="blockPageEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```java
public java.lang.Object getBlockPageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPageInput`<sup>Optional</sup> <a name="blockPageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageInput"></a>

```java
public java.lang.Object getBlockPageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBlockPage">ZeroTrustGatewayPolicyRuleSettingsBlockPage</a>

---

##### `blockReasonInput`<sup>Optional</sup> <a name="blockReasonInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockReasonInput"></a>

```java
public java.lang.String getBlockReasonInput();
```

- *Type:* java.lang.String

---

##### `bypassParentRuleInput`<sup>Optional</sup> <a name="bypassParentRuleInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRuleInput"></a>

```java
public java.lang.Object getBypassParentRuleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkSessionInput`<sup>Optional</sup> <a name="checkSessionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSessionInput"></a>

```java
public java.lang.Object getCheckSessionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

---

##### `dnsResolversInput`<sup>Optional</sup> <a name="dnsResolversInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolversInput"></a>

```java
public java.lang.Object getDnsResolversInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egressInput"></a>

```java
public java.lang.Object getEgressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

---

##### `ignoreCnameCategoryMatchesInput`<sup>Optional</sup> <a name="ignoreCnameCategoryMatchesInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput"></a>

```java
public java.lang.Object getIgnoreCnameCategoryMatchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insecureDisableDnssecValidationInput`<sup>Optional</sup> <a name="insecureDisableDnssecValidationInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipCategoriesInput`<sup>Optional</sup> <a name="ipCategoriesInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategoriesInput"></a>

```java
public java.lang.Object getIpCategoriesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipIndicatorFeedsInput`<sup>Optional</sup> <a name="ipIndicatorFeedsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipIndicatorFeedsInput"></a>

```java
public java.lang.Object getIpIndicatorFeedsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `l4OverrideInput`<sup>Optional</sup> <a name="l4OverrideInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4OverrideInput"></a>

```java
public java.lang.Object getL4OverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettingsInput"></a>

```java
public java.lang.Object getNotificationSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

---

##### `overrideHostInput`<sup>Optional</sup> <a name="overrideHostInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHostInput"></a>

```java
public java.lang.String getOverrideHostInput();
```

- *Type:* java.lang.String

---

##### `overrideIpsInput`<sup>Optional</sup> <a name="overrideIpsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIpsInput"></a>

```java
public java.util.List<java.lang.String> getOverrideIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `payloadLogInput`<sup>Optional</sup> <a name="payloadLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLogInput"></a>

```java
public java.lang.Object getPayloadLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

---

##### `quarantineInput`<sup>Optional</sup> <a name="quarantineInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.quarantineInput"></a>

```java
public java.lang.Object getQuarantineInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.redirectInput"></a>

```java
public java.lang.Object getRedirectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a>

---

##### `resolveDnsInternallyInput`<sup>Optional</sup> <a name="resolveDnsInternallyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsInternallyInput"></a>

```java
public java.lang.Object getResolveDnsInternallyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a>

---

##### `resolveDnsThroughCloudflareInput`<sup>Optional</sup> <a name="resolveDnsThroughCloudflareInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflareInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `untrustedCertInput`<sup>Optional</sup> <a name="untrustedCertInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCertInput"></a>

```java
public java.lang.Object getUntrustedCertInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

---

##### `addHeaders`<sup>Required</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowChildBypass`<sup>Required</sup> <a name="allowChildBypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypass"></a>

```java
public java.lang.Object getAllowChildBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPageEnabled`<sup>Required</sup> <a name="blockPageEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabled"></a>

```java
public java.lang.Object getBlockPageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockReason`<sup>Required</sup> <a name="blockReason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockReason"></a>

```java
public java.lang.String getBlockReason();
```

- *Type:* java.lang.String

---

##### `bypassParentRule`<sup>Required</sup> <a name="bypassParentRule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRule"></a>

```java
public java.lang.Object getBypassParentRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreCnameCategoryMatches`<sup>Required</sup> <a name="ignoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatches"></a>

```java
public java.lang.Object getIgnoreCnameCategoryMatches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insecureDisableDnssecValidation`<sup>Required</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipCategories`<sup>Required</sup> <a name="ipCategories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategories"></a>

```java
public java.lang.Object getIpCategories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipIndicatorFeeds`<sup>Required</sup> <a name="ipIndicatorFeeds" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipIndicatorFeeds"></a>

```java
public java.lang.Object getIpIndicatorFeeds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideHost`<sup>Required</sup> <a name="overrideHost" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHost"></a>

```java
public java.lang.String getOverrideHost();
```

- *Type:* java.lang.String

---

##### `overrideIps`<sup>Required</sup> <a name="overrideIps" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIps"></a>

```java
public java.util.List<java.lang.String> getOverrideIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolveDnsThroughCloudflare`<sup>Required</sup> <a name="resolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflare"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

---


### ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

---


### ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.resetFileTypes">resetFileTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileTypes` <a name="resetFileTypes" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.resetFileTypes"></a>

```java
public void resetFileTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fileTypesInput">fileTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fileTypes">fileTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileTypesInput`<sup>Optional</sup> <a name="fileTypesInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fileTypesInput"></a>

```java
public java.util.List<java.lang.String> getFileTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.fileTypes"></a>

```java
public java.util.List<java.lang.String> getFileTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsQuarantine">ZeroTrustGatewayPolicyRuleSettingsQuarantine</a>

---


### ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resetIncludeContext">resetIncludeContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resetPreservePathAndQuery">resetPreservePathAndQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeContext` <a name="resetIncludeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resetIncludeContext"></a>

```java
public void resetIncludeContext()
```

##### `resetPreservePathAndQuery` <a name="resetPreservePathAndQuery" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.resetPreservePathAndQuery"></a>

```java
public void resetPreservePathAndQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.includeContextInput">includeContextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.preservePathAndQueryInput">preservePathAndQueryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.includeContext">includeContext</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.preservePathAndQuery">preservePathAndQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeContextInput`<sup>Optional</sup> <a name="includeContextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.includeContextInput"></a>

```java
public java.lang.Object getIncludeContextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preservePathAndQueryInput`<sup>Optional</sup> <a name="preservePathAndQueryInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.preservePathAndQueryInput"></a>

```java
public java.lang.Object getPreservePathAndQueryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.targetUriInput"></a>

```java
public java.lang.String getTargetUriInput();
```

- *Type:* java.lang.String

---

##### `includeContext`<sup>Required</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.includeContext"></a>

```java
public java.lang.Object getIncludeContext();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preservePathAndQuery`<sup>Required</sup> <a name="preservePathAndQuery" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.preservePathAndQuery"></a>

```java
public java.lang.Object getPreservePathAndQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsRedirect">ZeroTrustGatewayPolicyRuleSettingsRedirect</a>

---


### ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resetViewId">resetViewId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFallback` <a name="resetFallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resetFallback"></a>

```java
public void resetFallback()
```

##### `resetViewId` <a name="resetViewId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.resetViewId"></a>

```java
public void resetViewId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fallbackInput">fallbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.viewIdInput">viewIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fallback">fallback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.viewId">viewId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fallbackInput"></a>

```java
public java.lang.String getFallbackInput();
```

- *Type:* java.lang.String

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.viewIdInput"></a>

```java
public java.lang.String getViewIdInput();
```

- *Type:* java.lang.String

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.fallback"></a>

```java
public java.lang.String getFallback();
```

- *Type:* java.lang.String

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally">ZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally</a>

---


### ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference;

new ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

---


### ZeroTrustGatewayPolicyScheduleOutputReference <a name="ZeroTrustGatewayPolicyScheduleOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_gateway_policy.ZeroTrustGatewayPolicyScheduleOutputReference;

new ZeroTrustGatewayPolicyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetFri">resetFri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetMon">resetMon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetSat">resetSat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetSun">resetSun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetThu">resetThu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetTue">resetTue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetWed">resetWed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFri` <a name="resetFri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetFri"></a>

```java
public void resetFri()
```

##### `resetMon` <a name="resetMon" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetMon"></a>

```java
public void resetMon()
```

##### `resetSat` <a name="resetSat" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetSat"></a>

```java
public void resetSat()
```

##### `resetSun` <a name="resetSun" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetSun"></a>

```java
public void resetSun()
```

##### `resetThu` <a name="resetThu" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetThu"></a>

```java
public void resetThu()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetTue` <a name="resetTue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetTue"></a>

```java
public void resetTue()
```

##### `resetWed` <a name="resetWed" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.resetWed"></a>

```java
public void resetWed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.friInput">friInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.monInput">monInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.satInput">satInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sunInput">sunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.thuInput">thuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.tueInput">tueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.wedInput">wedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.fri">fri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.mon">mon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sat">sat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sun">sun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.thu">thu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.tue">tue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.wed">wed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friInput`<sup>Optional</sup> <a name="friInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.friInput"></a>

```java
public java.lang.String getFriInput();
```

- *Type:* java.lang.String

---

##### `monInput`<sup>Optional</sup> <a name="monInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.monInput"></a>

```java
public java.lang.String getMonInput();
```

- *Type:* java.lang.String

---

##### `satInput`<sup>Optional</sup> <a name="satInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.satInput"></a>

```java
public java.lang.String getSatInput();
```

- *Type:* java.lang.String

---

##### `sunInput`<sup>Optional</sup> <a name="sunInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sunInput"></a>

```java
public java.lang.String getSunInput();
```

- *Type:* java.lang.String

---

##### `thuInput`<sup>Optional</sup> <a name="thuInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.thuInput"></a>

```java
public java.lang.String getThuInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `tueInput`<sup>Optional</sup> <a name="tueInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.tueInput"></a>

```java
public java.lang.String getTueInput();
```

- *Type:* java.lang.String

---

##### `wedInput`<sup>Optional</sup> <a name="wedInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.wedInput"></a>

```java
public java.lang.String getWedInput();
```

- *Type:* java.lang.String

---

##### `fri`<sup>Required</sup> <a name="fri" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.fri"></a>

```java
public java.lang.String getFri();
```

- *Type:* java.lang.String

---

##### `mon`<sup>Required</sup> <a name="mon" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.mon"></a>

```java
public java.lang.String getMon();
```

- *Type:* java.lang.String

---

##### `sat`<sup>Required</sup> <a name="sat" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sat"></a>

```java
public java.lang.String getSat();
```

- *Type:* java.lang.String

---

##### `sun`<sup>Required</sup> <a name="sun" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.sun"></a>

```java
public java.lang.String getSun();
```

- *Type:* java.lang.String

---

##### `thu`<sup>Required</sup> <a name="thu" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.thu"></a>

```java
public java.lang.String getThu();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `tue`<sup>Required</sup> <a name="tue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.tue"></a>

```java
public java.lang.String getTue();
```

- *Type:* java.lang.String

---

##### `wed`<sup>Required</sup> <a name="wed" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.wed"></a>

```java
public java.lang.String getWed();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicySchedule">ZeroTrustGatewayPolicySchedule</a>

---



